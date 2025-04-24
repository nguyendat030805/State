import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [ds, setDs] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/sinhviens')
        .then(res => setDs(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
        <h2>Danh sách sinh viên</h2>
        <ul>
            {ds.map(sv => (
            <li key={sv.id}>
                {sv.ho_ten} - {sv.lop} - {sv.email}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Data;
