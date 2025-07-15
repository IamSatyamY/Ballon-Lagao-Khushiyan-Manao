// ProductPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css'; // Import the new CSS file

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      setLoading(true);
      axios.get(`/api/home/products/category/${category}`)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching products", err);
          setProducts([]);
          setLoading(false);
        });
    }
  }, [category]);

  const handleEnquiry = (product) => {
    const message = `I'm interested in the product: ${product.title}.`;
    const whatsappLink = `https://wa.me/+917666325325?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="product-page product-list-container">
      <h2 className="product-list-title" >{category?.replaceAll("_", " ")} Products</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={`/api/admin/uploads/product?filename=${product.image}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {/* <p><strong>Category:</strong> {product.category}</p> */}
              <div className="price">₹{product.price}</div>
              {/* <div className="stock">Stock: {product.stock}</div> */}
              <div className="actions">
                <button className="btn btn-success" onClick={() => handleEnquiry(product)}>Enquiry Now</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products found for "{category}".</p>
      )}
    </div>
  );
};

export default ProductPage;
