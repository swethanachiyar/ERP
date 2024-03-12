/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState,useEffect } from 'react';
import OrderData from './Orderdata';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/ordermanagement.css";

const Ordermanagement = () => {
  useEffect(() => {
    document.title = "ERP System | Ordermanagement"
  }, [])


  const [orders, setOrders] = useState(OrderData);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (orderId) => {
    const order = orders.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };


  return (
    
      <div className='ordermanagement'>
<div className='heading1 shadow'>
Enterprise Resource Planning system | <span style={{color:'white'}}>Order Management</span>
</div>



<div className='container-md'>
        <div className='row justify-content-center align-items-center g-2' style={{ marginTop: "40px" }}>
          <div className='col-lg-7 col-md-8 col-sm-10 shadow-sm' style={{ border: "1px solid gray", padding: "20px", borderRadius: "5px" }}>
            <div className='heading2'>Order Details</div>
          
            {selectedOrder && (
        <div>
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer Name: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
        </div>
      )}
          
          </div>

          <div className='col-lg-12 col-md-12 col-sm-12'>
     
<br/>
          <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.status}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => handleViewDetails(order.id)}
                >
                  View Details
                </button>&nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdateStatus(order.id, 'Shipped')}
                >
                  Mark as Shipped
                </button>&nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


   
    




          </div>
        </div>
      </div>

        </div>
  
  );
}
export default Ordermanagement;