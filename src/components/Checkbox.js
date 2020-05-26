import React, { useState } from 'react';
import '../css/Checkbox.css';
import Icon from './Icon';
import { themed } from '../constants/theme';

const Checkbox = ({checked,onCheckChange = ()=>{}})=>{
    

    const toggleCheckbox = (e)=>{
        e.stopPropagation();
        onCheckChange(!checked)
    }

    return (
        <div
        style = {{backgroundColor: checked ? themed.primaryC:'transparent', border: `1px solid ${checked ? 'transparent':'#9da1a7'}`}}
         onClick = {toggleCheckbox} 
         className = "CheckboxElement Container Flex-C">
            {
                checked &&
                <Icon
                style = {{fontSize:"12px",pointerEvents:"none", color: "white"}}
                icon = 'done'/>
            }
        </div>
    );
}

export default Checkbox;