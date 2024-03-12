import React, { useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import OrderData from './Orderdata';

const localizer = momentLocalizer(moment);

const Ordercalview = () => {

    useEffect(() => {
        document.title = "ERP System | Order Calendar View"
      }, [])
    

  const [selectedOrder, setSelectedOrder] = useState(null); 

  const handleEventClick = (event) => {
    const orderClicked = OrderData.find(order => order.customerName === event.title);
    setSelectedOrder(orderClicked);
  };

  const events = OrderData.map((order) => ({
    title: order.customerName,
    start: new Date(order.orderDate),
    end: new Date(order.orderDate),
  }));

  return (
    <div className='container-fluid'>
          <div className='heading2'>Orders Calendar View</div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date()}
            views={['month']}
            onSelectEvent={handleEventClick} 
            style={{ height: 500 }}
          />
     
     
      {selectedOrder && ( 
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedOrder(null)}>&times;</span>
            <h2>Order Details</h2>
            <p>ID: {selectedOrder.id}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <p>Status: {selectedOrder.status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ordercalview;
