import React, { useState } from 'react';
import Checkbox from './Checkbox';


const SelectBox = ({onSelect = ()=>{},children})=>{
    const [checked,setChecked] = useState(false);
    const handleCheck = ()=>{
        setChecked(!checked)
        onSelect(!checked)
    }
    return (
        <div style = {{display: "flex", cursor: "pointer", alignItems:"center"}} onClick = {handleCheck} className = "Selectbox">
            <Checkbox onCheckChange = {handleCheck} checked = {checked}/>
            <div className = "SelectBoxContent M-L-10">
                {children}
            </div>
        </div>
    );
}



export default SelectBox;