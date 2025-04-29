
import React, { useState } from "react";
import "../components/Midterm/ComponentsStyle.css";
const ProductForm = ({ onAddProduct, nextId }) => {
    const [formData, setFormData] = useState({
        id: nextId,
        name: "",
        name_category: "Thoi Trang Nam",
        code: "",
        image: "",
        price: "",
        old_price: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "image" && files.length ? "images/" + files[0].name : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({ ...formData });
        setFormData({
            id: formData.id + 1,
            name: "",
            name_category: "Thoi Trang Nam",
            code: "",
            image: "",
            price: "",
            old_price: "",
        });
        alert("Một sản phẩm đã được thêm vào");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Đẹp"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="name_category">Category</label>
                <select
                    className="form-control"
                    id="name_category"
                    name="name_category"
                    value={formData.name_category}
                    onChange={handleChange}
                >
                    <option value="">-- Chọn danh mục --</option>
                    <option value="Thoi Trang Nam">Nam</option>
                    <option value="Thoi Trang Nu">Nữ</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="code">Code</label>
                <input
                    className="form-control"
                    id="code"
                    name="code"
                    placeholder="XXXXXXX"
                    value={formData.code}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="10000"
                    value={formData.price}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="old_price">Old Price</label>
                <input
                    className="form-control"
                    id="old_price"
                    name="old_price"
                    placeholder="15000"
                    value={formData.old_price}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-primary mb-2">
                Save
            </button>
        </form>
    );
};

export default ProductForm;

