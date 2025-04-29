import React, { useState } from 'react';
const Form = () =>{
    const [Dtb, setDtb] = useState({
        dToan: 0,
        dLy: 0,
        tB: 0,
        rank:""
    });
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setDtb({
            ...Dtb,
            [name]: Number(value)
        });
    }
    const tinhTB = () =>{
        const tinhDtb = (Dtb.dLy+Dtb.dToan)/2;
        let rank= "";
        if (tinhDtb >=9){
            rank = "Xuat Sac";  
        } 
        else if(tinhDtb>=8){
            rank="gioi";
        }
        else if(tinhDtb>=5){
            rank ="TB";
        }
        else{
            rank = "Ngu";
        }
        setDtb({
            ...Dtb,
            tB: tinhDtb,
            rank: rank
        })
    }
    const Submit = (e) =>{
        e.preventDefault();
        tinhTB();

    }
    return (
        <div>
            <h2>Form Tính Điểm Trung Bình</h2>
            <form onSubmit={Submit}>
                <div>
                <label>Điểm Toán: </label>
                <input
                    type="number"
                    name="dToan"
                    value={Dtb.dToan}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label>Điểm Lý: </label>
                <input
                    type="number"
                    name="dLy"
                    value={Dtb.dLy}
                    onChange={handleChange}
                />
                </div>
                <button type="submit">OK</button>
            </form>
        
            <h3>Điểm Trung Bình: {Dtb.tB}</h3>
            <h3>Xếp loại: {Dtb.rank}</h3>
        </div>
      );

}
export default Form;