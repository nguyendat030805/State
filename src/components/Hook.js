
import { useState, useEffect } from "react";

const useLocalProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(storedProducts);
    }, []);

    const saveProducts = (newProducts) => {
        localStorage.setItem("products", JSON.stringify(newProducts));
        setProducts(newProducts);
    };

    const addProduct = (product) => {
        const updatedProducts = [...products, product];
        saveProducts(updatedProducts);
    };

    return { products, addProduct };
};

export default useLocalProducts;
