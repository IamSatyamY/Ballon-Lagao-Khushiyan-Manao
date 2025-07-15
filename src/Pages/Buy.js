
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Buy = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories from the backend
    axios.get('/api/admin/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const formattedCategory = selectedCategory.toLowerCase().replace(/\s+/g, '');
      // Fetch products for the selected category
      axios.get(`/api/home/products/category/${formattedCategory}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(`Error fetching products for category ${selectedCategory}:`, error);
        });
    }
  }, [selectedCategory]);

  return (
    <div className="container">
      <h1>Buy Products</h1>
      <div className="form-group">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          className="form-control"
          value={selectedCategory}
          onChange={(e) => {
            console.log("Selected value:", e.target.value);
            setSelectedCategory(e.target.value);
          }}
        >
          <option value="">-- Select a category --</option>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
                  </div>
                  <small className="text-muted">₹ {product.price}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
