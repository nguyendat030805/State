import React, {useEffect, useState} from "react";
import {getData} from "./Room";
const FormDatPhong = () =>{
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [myfile, setMyfile] = useState('');
    const [typeRoom, setTypeRoom] = useState('');
    const [area, setArea] = useState('');
    const [price, setPrice] = useState('');
    const [oldprice, setOldprice] = useState('');

    const [list, setList] = useState([]);
    useEffect(()=>{
        const rom = getData();
        localStorage.setItem('rooms', JSON.stringify(rom));

        if (localStorage.getItem('rooms')) {
        setList(JSON.parse(localStorage.getItem('rooms')));
        }
    }, [])
    const saveLocalStorage = (e) => {
        e.preventDefault();
        const newRoom = { id, name, myfile, type_room: typeRoom, area, price, oldprice };
        const updatedList = [...list, newRoom];
        setList(updatedList);
        localStorage.setItem('rooms', JSON.stringify(updatedList));
        setId(''); setName(''); setMyfile(''); setTypeRoom(''); setArea(''); setPrice(''); setOldprice('');
      };
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'myfile') setMyfile(files[0].name);
        else if (name === 'name') setName(value);
        else if (name === 'type_room') setTypeRoom(value);
        else if (name === 'area') setArea(value);
        else if (name === 'price') setPrice(value);
        else if (name === 'oldprice') setOldprice(value);
        else if (name === 'id') setId(value);
      };
    
      const handleMessage = (e) => {
        e.preventDefault();
        alert('Thanks for your order!');
      };
    
      return (
        <div className="container">
          <h2>Add Room</h2>
          <form>
            <input name="name" value={name} onChange={handleChange} placeholder="Enter your name" className="form-control" />
            <input type="file" name="myfile" onChange={handleChange} />
            <input name="type_room" value={typeRoom} onChange={handleChange} placeholder="Enter type room" className="form-control" />
            <input name="area" value={area} onChange={handleChange} placeholder="Enter area" className="form-control" />
            <input name="price" value={price} onChange={handleChange} placeholder="Enter price" className="form-control" />
            <input name="oldprice" value={oldprice} onChange={handleChange} placeholder="Enter old price" className="form-control" />
            <button onClick={saveLocalStorage} className="btn btn-primary">Add</button>
            <button onClick={handleMessage} className="btn btn-primary" style={{ marginLeft: '10px' }}>Đặt Phòng</button>
          </form>
    
          <table className="table table-striped table-dark" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>ID</th><th>NAME</th><th>TYPE ROOM</th><th>IMAGE</th><th>AREA</th><th>PRICE</th><th>OLDPRICE</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.type_room}</td>
                  <td><img src={"images/" + item.myfile} alt="" width="50" height="50" /></td>
                  <td>{item.area}</td>
                  <td>{item.price}</td>
                  <td>{item.oldprice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
export default FormDatPhong;