import React, { useState, useRef } from 'react';
import StyledExpandableSearch from '../styled/StyledExpandableSearch';
import Icon from './Icon';

const ExpandableSearch = ({...props})=>{
    const [showInput,setShowInput] = useState(false);
    const inputRef = useRef();

    return (
        <StyledExpandableSearch showInput = {showInput}>
            <input {...props} ref = {inputRef} type="text" className="Input"/>
            <button onClick = {()=> {
                !showInput && setShowInput(true)
                inputRef.current.focus()
            }} className={`Button ${showInput ? '':'Shadow'}`}>
                <Icon icon = "search"/>
            </button>
            
        </StyledExpandableSearch>
    );
}

export default ExpandableSearch;