
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Common_Category.css";

const ProductsByCategory = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`/api/home/products/category/${category}`);
                setProducts(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='category-common-div' style={{ padding: "30px" }}>
            <br />
            <h1>{category}</h1>
            <div className='CommonImgContainerForCategoryItemsByContact'>
                {products.map(product => (
                    <div className='img-div' key={product.id}>
                        <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} />
                        <h5>{product.name}</h5>
                        <a className='btn btn-secondary btn-sm' href="https://wa.me/917666325325" target="_blank" rel="noopener noreferrer">Enquiry Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsByCategory;
