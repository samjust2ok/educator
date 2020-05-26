import React from 'react';
import '../css/Tag.css'
import Icon from './Icon';


const n = ()=>{}
const Tag = ({tagObject,onClick = n,selector = true})=>{
    return (
        <div selector = {`${selector}`} className = "Tag" onClick = {()=>selector && onClick(tagObject)}>
            <p className = "M-R-10">{tagObject.text}</p>
            <Icon onClick = {(e)=>{
                e.stopPropagation();
                onClick(tagObject)
            }} icon = {selector ? 'add':'close'}/>
        </div>
    )
}

export default Tag;