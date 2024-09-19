import userModel from '../models/userModel.js'

//add items to user cart
const addToCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error) 
        res.json({success:false,message:"Error"})
    }
}

//remove from user cart
const removeFromCart = async (req, res) => {
    try {
        // Find the user by ID
        let userData = await userModel.findById(req.body.userId);

        // Check if the user exists
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Check if the cart exists
        let cartData = userData.cartData || {};

        // Check if the item exists in the cart
        if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
            // Decrement the item count
            cartData[req.body.itemId] -= 1;

            // Remove the item if the count reaches zero
            if (cartData[req.body.itemId] === 0) {
                delete cartData[req.body.itemId];
            }

            // Update the cart in the database
            await userModel.findOneAndUpdate(
                { _id: req.body.userId },
                { $set: { cartData: cartData } }
            );

            return res.json({ success: true, message: "Removed from Cart" });
        } else {
            return res.status(404).json({ success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Error" });
    }
};


//fetch user cart data
const getCart = async(req,res) =>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addToCart,removeFromCart,getCart}