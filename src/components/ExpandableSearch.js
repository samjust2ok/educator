import React, { useState, useRef } from 'react';
import StyledExpandableSearch from '../styled/StyledExpandableSearch';
import Icon from './Icon';
import { useOnClickOutside } from '../utils/customHooks';

const ExpandableSearch = ({...props})=>{
    const [showInput,setShowInput] = useState(false);
    const inputRef = useRef();
    const ref = useRef();

    useOnClickOutside(ref,()=>setShowInput(false));

    return (
        <StyledExpandableSearch ref = {ref} showInput = {showInput}>
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