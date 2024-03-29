# ERP Setup Guide
Step 1: Creating React App
```bash
npx create-react-app erp
```

Step 2: Installing Dependencies
```bash
cd erp
npm i react-router-dom bootstrap bootstrap-icons react-big-calendar moment
```

Step 3: Updating Source Code
If there's an existing "src" directory, delete it. Then, clone the "src" folder from the repository and place it inside the "erp" directory.

To run the application, use the following command in the terminal:
```bash
npm start
```
The application will be accessible at localhost:3000.

The localhost webpage serves as an interface for an ERP system, featuring essential functionalities accessible through a navigation bar.

Navigation Bar Options
         1.Homepage/Dashboard:
                   The homepage/dashboard of your ERP system is accessed via localhost.
                   It contains a navigation bar with links to different sections of the ERP system.
        
         2.Product Management:
                   This section allows users to manage products within the system.
                   When clicking on "Product Management" in the dashboard, users are redirected to a page displaying a list of products.
                   Users can add new products by providing details such as name, category, price, and stock quantity.
                   Existing products can be updated (changing details like name, category, price, etc.) or deleted from the system.
         
         3.Order Management:
                  This section deals with managing orders placed by customers.
                  It displays mock data containing order details (such as customer information, order items, total price, etc.) and order status.
                  Users can view details of each order and update its status (e.g., processing, shipped, delivered).
                  Orders can also be deleted from the system if needed.
       
         4.Order Calendar View:
                  This feature provides a visual representation of order delivery statuses.
                  Users can view a calendar showing scheduled delivery dates for orders.
                  Each date on the calendar may be color-coded or labeled to indicate the status of orders scheduled for delivery on that day (e.g., pending, in transit, delivered).
