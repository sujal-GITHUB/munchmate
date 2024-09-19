import React, { useEffect, useState } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      toast.error('Network error. Please try again later.');
    }
  };

  const statusHandler =async(event,orderId) =>{
    const response = await axios.post(url+'/api/order/status',{orderId,status,status:event.target.value})
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [url]);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, orderIndex) => (
          <div key={orderIndex} className="order-item">
            <img src={assets.parcel_icon} alt="Parcel Icon" />
            <div className="order-item-food">
              {order.items && Array.isArray(order.items) ? (
                order.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item.name} x {item.quantity}
                    {itemIndex < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))
              ) : (
                <span>No items available</span>
              )}
            </div>
            <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
            <div className="order-item-address">
              <p>{order.address.street + ' ,'}</p>
              <p>{order.address.city + ', '+order.address.state+', '+order.address.country+', '+order.address.zipcode}</p>
            </div>
            <p className="order-item-phone">{order.address.phone}</p>
            <div>
              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
