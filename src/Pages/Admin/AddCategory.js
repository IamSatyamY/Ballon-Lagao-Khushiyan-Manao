import React, { useState, useEffect } from "react";
import "./AddCategory.css"
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null); // Track category being edited
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch("/admin/category");
            const result = await response.json();
            setCategories(result);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await fetch(`/admin/editCategory/${id}`);

            if (!response.ok) {
                throw new Error("Category not found or invalid response");
            }

            const category = await response.json();
            setEditingCategory(category);
            setImageUrl(`/admin/uploads?filename=${category.imageName}`);
        } catch (error) {
            console.error("Error loading category:", error);
            setMessage("Failed to load category. Please try again.");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const method = editingCategory ? "PUT" : "POST";
        const endpoint = editingCategory ? `/admin/updateCategory/${editingCategory.id}` : "/admin/saveCategory";

        try {
            const response = await fetch(endpoint, {
                method: method,
                body: formData,
            });

            const result = await response.json();
            setMessage(result.message);

            if (result.status === "success") {
                setImageUrl(result.imagePath);

                // Update category list dynamically
                if (editingCategory) {
                    setCategories((prevCategories) =>
                        prevCategories.map((category) =>
                            category.id === editingCategory.id
                                ? { ...category, name: formData.get("name"), isActive: formData.get("isActive") === "true", imageName: result.imagePath.split("=")[1] }
                                : category
                        )
                    );
                } else {
                    setCategories((prevCategories) => [
                        ...prevCategories,
                        { 
                            id: result.id, 
                            name: formData.get("name"), 
                            imageName: result.imagePath.split("=")[1], 
                            isActive: formData.get("isActive") === "true" 
                        }
                    ]);
                }

                setEditingCategory(null);
                navigate("/admin/category");
            }
        } catch (error) {
            console.error("Error saving category:", error);
            setMessage("Failed to save category");
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/admin/deleteCategory/${id}`, {
                method: "DELETE",
            });

            const result = await response.json();
            setMessage(result.message);

            if (result.status === "success") {
                setCategories((prevCategories) => prevCategories.filter((category) => category.id !== id));
            }
        } catch (error) {
            console.error("Error deleting category:", error);
            setMessage("Failed to delete category");
        }
    };

    return (
        <div className="addcategory container dflex justify-center items-center ">
            <h1>{editingCategory ? "Edit Category" : "Add Category"}</h1>
            {message && <p className="alert">{message}</p>}
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label>
                    Enter Category <br />
                    <input type="text" name="name" defaultValue={editingCategory?.name || ""} required />
                </label>
                <br /><br />

                <label>
                    Enter Status <br />
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="isActive" value="true" defaultChecked={editingCategory?.isActive === true} required />
                        <label className="form-check-label">Active</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="isActive" value="false" defaultChecked={editingCategory?.isActive === false} required />
                        <label className="form-check-label">Inactive</label>
                    </div>
                </label>
                <br /><br />

                <label>
                    Upload image <br />
                    <input type="file" name="file" />
                </label>
                <br /><br />

                <button className="btn btn-primary" type="submit">
                    {editingCategory ? "Update" : "Save"}
                </button>
            </form>

            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt="Category" style={{ width: "200px" }} />
                </div>
            )}

            <div className="category-list text-center mt-3">
                <h2>Category List</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Category Name</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{index + 1}</td>
                                <td>{category.name}</td>
                                <td>
                                    <img src={`/admin/uploads?filename=${category.imageName}`} style={{ width: "100px" }} alt={category.name} />
                                </td>
                                <td>{category.isActive ? "Active" : "Inactive"}</td>
                                <td>
                                    {/* <button className="btn btn-primary" onClick={() => handleEdit(category.id)}>Edit</button> */}
                                    <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddCategory;
