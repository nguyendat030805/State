import React, {useState, useEffect} from "react";
import axios from "axios";
const Filter=()=>{
    const [students, setStudent] = useState([]);

    useEffect(() => {
        axios
        .get('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
        .then(response => {
            const mapData = response.data.map(item => ({
            id: item.id,
            name: item.name,
            avatar: item.avatar
            }));
            setStudent(mapData);
        })
        .catch(error => {
            console.error("Lỗi lấy dữ liệu:", error);
        });
    }, []);

    return (
        <div>
        <h3>Danh sách Sinh viên</h3>
        {students.map((student) => (
            <div key={student.id}>
            <h4>Name: {student.name}</h4>
            <img src={student.avatar} alt={student.name} />
            </div>
        ))}
        </div>
    );
}