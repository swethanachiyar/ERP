import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/productmanagement.css";
import Productdata from './Productdata';

const Productmanagement = () => {
  useEffect(() => {
    document.title = "ERP System | Productmanagement"
  }, [])

  const [products, setProducts] = useState(Productdata);
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (
      !newProduct.name.trim() ||
      !newProduct.category.trim() ||
      newProduct.price <= 0 ||
      newProduct.stockQuantity <= 0
    ) {
      alert('Please fill all fields and ensure Price and Stock Quantity are greater than 0.');
      return;
    }

    if (newProduct.id === null) {
      const newProductWithId = { ...newProduct, id: products.length + 1 };
      setProducts([...products, newProductWithId]);
      setNewProduct({ id: null, name: '', category: '', price: 0, stockQuantity: 0 });
    } else {
      const updatedProducts = products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      );
      setProducts(updatedProducts);
      setNewProduct({ id: null, name: '', category: '', price: 0, stockQuantity: 0 });
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    if (productToEdit) {
      setNewProduct({ ...productToEdit });
    } else {
      alert("Product not found for editing.");
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className='productmanagement'>
      <div className='heading1 shadow'>
        Enterprise Resource Planning system | <span style={{ color: 'white' }}>Product Management</span>
      </div>

      <div className='container-md'>
        <div className='row justify-content-center align-items-center g-2' style={{ marginTop: "40px" }}>
          <div className='col-lg-7 col-md-8 col-sm-10 shadow-sm' style={{ border: "1px solid gray", padding: "20px", borderRadius: "5px" }}>
            <div className='heading2'>{newProduct.id ? 'Edit Product' : 'Add Product'}</div>
            {newProduct.id !== null && (
              <div>
                <label>ID:</label>
                <input
                  type="number"
                  name="id"
                  value={newProduct.id}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
            )}
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
            />
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
            <label>Stock Quantity:</label>
            <input
              type="number"
              name="stockQuantity"
              value={newProduct.stockQuantity}
              onChange={handleInputChange}
            />

            <div style={{ textAlign: 'center', margin: "20px 0 0 0" }}>
              <button className='btn btn-secondary' onClick={handleAddProduct}>
                {newProduct.id ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </div>

          <div className='col-lg-7 col-md-8 col-sm-10'>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.stockQuantity}</td>
                    <td>
                      <button className="btn btn-info" onClick={() => handleEditProduct(product.id)}>Edit</button>&nbsp;
                      <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
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

export default Productmanagement;
