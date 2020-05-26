import React, { useState, useEffect, useRef } from 'react';
import StyledDropBox, { StyledDropBoxList } from '../styled/StyledDropBox';
import Icon from './Icon';
import { theme } from '../constants/theme';


const DropBox = ({title, options = []})=>{
    const [showDrop,setShowDrop] = useState(false);
    const [selectedIndex,setSelectedIndex] = useState(options.length - 1);
    const dropRef = useRef(null);

    const onSelect = (index)=>{
        const callBack = options[index].handleSelected;
        callBack && callBack();
        setSelectedIndex(index)
    };

    useEffect(()=>{
        window.addEventListener("click",(e)=>{
            if(e.target != dropRef.current) 
            setShowDrop(false)

            showDrop && setShowDrop(false)
        })
    },[])
    return (
        <StyledDropBox>
            <div ref = {dropRef} onClick = {(e)=>{
                setShowDrop(!showDrop)
            }} className="Title">
                <p>
                    {title}
                </p>
                <div className = "Icon">
                    <Icon icon = 'arrow_drop_down'/>
                </div>
            </div>
            {
                showDrop &&
                <div className="Drop Scroll-Y">
                    <ul>
                        {
                            options.map((option,index)=>{
                                return <DropBoxList 
                                key = {index}
                                index = {index} 
                                selected = {index === selectedIndex}
                                name = {option.title} 
                                onSelect = {onSelect} 
                                closeDrop = {()=>setShowDrop(false)}/>
                            })
                        }
                    </ul>
                </div>
            }
        </StyledDropBox>
    );
}

const DropBoxList = ({onSelect = ()=>{}, selected, index, closeDrop = ()=>{}, name})=>{
    const handleClick = (e)=>{
        e.stopPropagation();
        onSelect(index);
        closeDrop();
    }

    const pStyle = {
        color: selected ? theme.primaryColor : theme.primaryTC
    }
    return (
        <StyledDropBoxList onClick = {handleClick}>
            <p style = {pStyle}>
                {name}
            </p>
        </StyledDropBoxList>
    )
}

export default DropBox;