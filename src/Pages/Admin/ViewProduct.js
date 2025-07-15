import React, { useEffect, useState } from 'react'
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ViewProduct.css';


const ViewProduct = () => {

  const [message, setMessage] = useState("");
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("/api/admin/viewproduct");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const method = editingProduct ? "PUT" : "POST";
        const endpoint = editingProduct
            ? `/api/admin/updateProduct/${editingProduct.id}`
            : "/api/admin/saveProduct";

        try {
            const response = await fetch(endpoint, {
                method,
                body: formData,
            });

            const result = await response.json();
            setMessage(result.message);

            if (result.status === "success") {
                setImageUrl(result.imagePath);

                if (editingProduct) {
                    setProducts((prev) =>
                        prev.map((p) =>
                            p.id === editingProduct.id
                                ? {
                                      ...p,
                                      title: formData.get("title"),
                                      description: formData.get("description"),
                                      category: formData.get("category"),
                                      price: formData.get("price"),
                                      stock: formData.get("stock"),
                                      image: result.imagePath.split("=")[1],
                                  }
                                : p
                        )
                    );
                } else {
                    setProducts((prev) => [
                        ...prev,
                        {
                            id: result.id,
                            title: formData.get("title"),
                            description: formData.get("description"),
                            category: formData.get("category"),
                            price: formData.get("price"),
                            stock: formData.get("stock"),
                            image: result.imagePath.split("=")[1],
                        },
                    ]);
                }

                setEditingProduct(null);
                navigate("/admin/addproduct");
                e.target.reset(); // Clear form

            }
        } catch (err) {
            console.error("Error saving product:", err);
            setMessage("Failed to save product");
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`/api/admin/deleteProduct/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            setMessage(data.message);
            if (data.status === "success") {
                setProducts((prev) => prev.filter((p) => p.id !== id));
            }
        } catch (err) {
            console.error("Error deleting product:", err);
            setMessage("Failed to delete product");
        }
    };

    

  return (
     <div className="product-list-container">
            <h2 className="product-list-title"><FaRegEye /> Product List</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={`/api/admin/uploads/product?filename=${product.image}`} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <div className="price">₹{product.price}</div>
                        <div className="stock">Stock: {product.stock}</div>
                        <div className="actions">
                            <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default ViewProduct