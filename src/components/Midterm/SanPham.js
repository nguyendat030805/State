// components/ProductList.jsx
import React from "react";
import "../components/Midterm/ComponentsStyle.css";

const ProductList = ({ products }) => {
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            {products.length > 0 ? (
                <div className="row">
                    {products.map((item) => (
                        <div className="col-sm-6 mb-3" key={item.id}>
                            <div className="card">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Danh mục: {item.name_category}</p>
                                    <p className="card-text">Code: {item.code}</p>
                                    <p className="card-text">Giá: {item.price}₫</p>
                                    <p className="card-text text-muted">
                                        Giá cũ: <del>{item.old_price}₫</del>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Chưa có sản phẩm nào.</p>
            )}
        </div>
    );
};

export default ProductList;
