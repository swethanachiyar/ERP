/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
// import Productdata from './Productdata';
// import OrderData from './Orderdata';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/dashboard.css";

const Dashboard = () => {


  useEffect(() => {
    document.title = "ERP System | Dashboard"
  }, [])

  // const totalCount = Productdata.length;
  // const totalOcount = OrderData.length;
  // const pendingOrders = OrderData.filter(order => order.status === 'Processing');
  // const shippedOrders = OrderData.filter(order => order.status === 'Shipped');
  // const deliveredOrders = OrderData.filter(order => order.status === 'Delivered');
  // const deliveredCount = deliveredOrders.length;
  // const pendingCount = pendingOrders.length;
  // const shippedCount = shippedOrders.length;

  return (

    <div className='dashboard'>
      <div className='heading1 shadow'>
        Enterprise Resource Planning system | <span style={{ color: 'white' }}>Dashboard</span>
      </div>

      <div className="container-md">
        <div className='row' style={{ marginTop: "50px" }}>
          <div className='col-sm-12'>
            <div className='heading2'>

              <NavLink to="/Productmanagement" className="nav-link">Products Management</NavLink>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='heading2'>
              <NavLink to="/Ordercalview" className="nav-link">Orders Calendar View</NavLink>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='heading2'>
              <NavLink to="/Ordermanagement" className="nav-link">Orders Management</NavLink>
            </div>
          </div>

          {/* <div className='col-sm-12'>
            <div className='heading2'>

              Total No.of Products : {totalCount}
              <hr/>
              Processing Orders : {pendingCount}<br/>
              Shipped Orders : {shippedCount}
              <br/>Delivered Orders : {deliveredCount}
              <br/>Total No.of Orders : {totalOcount}
            </div>
          </div> */}
        </div>
      </div>


    </div>

  );
}
export default Dashboard;