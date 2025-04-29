import React, { useState, useEffect } from "react";

function App() {
  const [product, setProduct] = useState({
    name: "",
    category: "Nam",
    code: "",
    imageBase64: "",
    price: "",
    oldPrice: "",
  });
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) setProducts(JSON.parse(storedProducts));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const reader = new FileReader();
      reader.onloadend = () => setProduct((prev) => ({ ...prev, imageBase64: reader.result }));
      if (files[0]) reader.readAsDataURL(files[0]);
    } else setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProduct({ name: "", category: "Nam", code: "", imageBase64: "", price: "", oldPrice: "" });
    alert("Lưu sản phẩm thành công!");
  };

  const renderProducts = (category) =>
    products
      .filter((p) => p.category === category)
      .map((product, index) => (
        <div key={index} style={{ width: "220px", marginBottom: "20px" }}>
          {product.imageBase64 && <img src={product.imageBase64} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />}
          <div>
            <div>{product.name}</div>
            <div>{product.code}</div>
            <div>{product.price} đ</div>
            {product.oldPrice && <div>{product.oldPrice} đ</div>}
            <button>Đặt mua</button>
          </div>
        </div>
      ));

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ padding: "20px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
        <select name="category" value={product.category} onChange={handleChange}>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <input type="text" name="code" value={product.code} onChange={handleChange} placeholder="Code" />
        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
        <input type="number" name="oldPrice" value={product.oldPrice} onChange={handleChange} placeholder="Old Price" />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setShowProducts(!showProducts)}>Show Products</button>
      </div>

      {showProducts && (
        <>
        {
          product.category === "Nam" &&(
            <>
              <h3>THỜI TRANG NAM</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {renderProducts("Nam")}
              </div>
            </>
          )
        }
        {
          product.category === "Nữ" &&(
            <>
              <h3>THỜI TRANG NỮ</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {renderProducts("Nữ")}
              </div>
            </>
          )
        }
          
        </>
      )}
    </div>
  );
}

export default App;
