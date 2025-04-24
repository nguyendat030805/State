import React, {useState} from "react";
const AreaRectangle = () =>{
    const [Area, setArea] = useState({
        width:0,
        height: 0,
        area: 0,
    });
    const handleChange = (c) =>{
        const {name, value} = c.target;
        setArea({
            ...Area,
            [name]: Number(value)
        });
    }
    const Calculation = () =>{
        setArea({
            ...Area,
            area: Area.width * Area.height
        })
    }
    return(
        <div style={{padding: '200px'}}>
            <h2>Tính diện tích hình chữ nhật</h2>
            <label>Chiều dài:</label>
            <input type="number" name="width" value={Area.width} onChange={handleChange}></input>
            <input type="number" name="height" value={Area.height} onChange={handleChange}></input>
            <button onClick={Calculation}>Tính diện tích</button>
            <h2>Diện tích: {Area.area}</h2>
        </div>
    )
}
export default AreaRectangle;