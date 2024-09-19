import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
    const frontend_url = process.env.FRONTEND_URL || 'http://localhost:5173';

    try {
        const { userId, items, amount, address } = req.body;

        // Validate order data (you can add more validation if needed)
        if (!userId || !items || !amount || !address) {
            return res.status(400).json({ success: false, message: 'Invalid order data' });
        }

        // Create new order in the database
        const newOrder = new orderModel({
            userId,
            items,
            amount,
            address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // Create Stripe line items
        const line_items = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: { name: item.name },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        // Add delivery charge
        line_items.push({
            price_data: {
                currency: 'usd',
                product_data: { name: 'Delivery Charges' },
                unit_amount: 2 * 100,
            },
            quantity: 1,
        });

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        // Send session URL to the frontend
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error('Error occurred while creating Stripe session:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const verifyOrder = async (req,res) =>{
    const {orderId,success} = req.body
    try {
        if (success == 'true'){
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            res.json({success:true,message:'Paid'})
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false,message:'Not Paid'})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    } 
}

//users order for frontend
const userOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//listing orders for admin panel
const listOrders = async(req,res) =>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

//api for updating order status
const updateStatus = async(req,res) =>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}

export { placeOrder,verifyOrder,userOrders,listOrders,updateStatus};
