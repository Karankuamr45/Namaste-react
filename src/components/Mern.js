import React, { useState } from 'react'


const Mern = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [addedProduct, setAddedProduct] = useState(null);
  
    const addProduct = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: productName, price: productPrice }),
        });
  
        const data = await response.json();
        setAddedProduct(data);
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };
  
    return (
      <div className="App">
        <h1>Ecommerce App</h1>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <button onClick={addProduct}>Add Product</button>
        </div>
        {addedProduct && (
          <div>
            <h2>Product Added:</h2>
            <p>Name: {addedProduct.name}</p>
            <p>Price: {addedProduct.price}</p>
          </div>
        )}
      </div>
    );
  };

export default Mern
