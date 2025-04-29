// pages/ThoiTrang.jsx
import React from "react";
import useLocalProducts from "./Midterm/Hook";
import ProductForm from "./Midterm/ShowData";
import ProductList from "./Midterm/SanPham";

const ThoiTrang = () => {
    const { products, addProduct } = useLocalProducts();

    return (
        <div className="row">
            <div className="col-sm-4">
                <ProductForm onAddProduct={addProduct} nextId={products.length ? parseInt(products[products.length - 1].id) + 1 : 1} />
            </div>
            <div className="col-sm-8">
                <ProductList products={products} />
            </div>
        </div>
    );
};

export default ThoiTrang;
