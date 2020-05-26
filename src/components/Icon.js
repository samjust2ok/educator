import React from 'react';

const Icon = ({icon, onClick, classNames = [], outlined = true, style})=>{
    const clN = `material-icons${outlined ? '-outlined':''} ${classNames.join(' ')}`
    return (
        <i style = {style} onClick = {onClick && onClick} className = {clN}>{icon}</i>
    )
}

export default Icon;