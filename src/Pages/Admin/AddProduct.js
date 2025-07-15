import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { TiPlusOutline } from "react-icons/ti";

const AddProduct = () => {
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

    const handleEdit = async (product) => {
        setEditingProduct(product);
        setImageUrl(`/api/admin/uploads/product?filename=${product.image}`);
    };

    return (
        <div className="addproduct container dflex justify-center items-center ">
            <h1><TiPlusOutline />{editingProduct ? "Edit Product" : "Add Product"}</h1>
            {message && <p className="alert">{message}</p>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>Enter Title:<br />
                    <input type="text" name="title" defaultValue={editingProduct?.title || ""} required />
                </label><hr />

                <label>Enter Description:<br />
                    <textarea name="description" defaultValue={editingProduct?.description || ""} required></textarea>
                </label><hr />

                <label>Category:<br />
                    <select name="category" defaultValue={editingProduct?.category || ""} required>
                        <option value="">Select</option>
                        <optgroup label="Products">
                            <option value="latexballoon">Latex Balloon</option>
                            <option value="partyitem">Party Item</option>
                            <option value="foilballoon">Foil Balloon</option>
                        </optgroup>
                        <optgroup label="Printed Balloon">
                            <option value="9inch">9 inch Print Balloon</option>
                            <option value="12inch">12 inch Print Balloon</option>
                            <option value="36inch">36 inch Print Balloon</option>
                            <option value="cromprint">Crom Print Balloon</option>
                            <option value="metallicprint">Metallic Print Balloon</option>
                        </optgroup>
                        <optgroup label="Promotional Sky">
                            <option value="6to14feet">6-14 ft Print Balloon</option>
                            <option value="squareshape">Square Shape</option>
                            <option value="blimpshape">Blimp Shape</option>
                        </optgroup>
                    </select>
                </label><hr />

                <label>Enter Price:<br />
                    <input type="number" name="price" defaultValue={editingProduct?.price || ""} required />
                </label><hr />

                {/* <label>Enter Stock:<br />
                    <input type="number" name="stock" defaultValue={editingProduct?.stock || ""} required />
                </label><hr /> */}

                <label>Upload Image:<br />
                    <input type="file" name="file" />
                </label><hr />

                <button type="submit" className="btn border">
                    {editingProduct ? "Update Product" : "Add Product"}
                </button>
            </form>

            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt="Product" style={{ width: "200px" }} />
                </div>
            )}

            <div className="product-list text-center">
                <h2>Product List</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>₹{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <img src={`/api/admin/uploads/product?filename=${product.image}`} alt={product.title} style={{ width: "100px" }} />
                                </td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => handleEdit(product)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddProduct;
