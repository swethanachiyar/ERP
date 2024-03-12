/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/navbar.css";

const Navbar = () => {

 
  return (
    <div className="erp-navbar">
    <nav className="navbar navbar-expand-lg fixed-top shadow">
  <div className="container-fluid">
    <span className="navbar-brand" style={{color:'white',borderRadius:'5px',backgroundColor:'green',fontSize:"25px",fontWeight:'bold',padding:'5px 10px'}}>
     ERP System
    </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{backgroundColor:"white",borderRadius:'5px'}}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink to="/" className="nav-link" aria-current="page">Dashboard</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Productmanagement" className="nav-link">Products Management</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Ordermanagement" className="nav-link">Orders Management</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/Ordercalview" className="nav-link">Orders Calendar View</NavLink>
        </li>

       
        
       
      </ul>
    </div>
  </div>
</nav>
</div>
  );
};

export default Navbar;

