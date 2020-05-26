import React from 'react';
import theme from '../constants/theme';
import Icon from './Icon';


const IconText = ({icon, showText = true, text,iconColor = theme.primaryColor, textColor = theme.primaryTC})=>{
    const contStyle = {
        display:"flex",
        width: "100%",
        alignItems:"center"
    }

    const iconStyle = {
        color: iconColor,
        width: "40px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }

    const textStyle = {
        color: textColor,
        marginLeft: "10px",
        fontSize: "1.2rem",
    }
    return (
        <div style = {contStyle}>
            <div style = {iconStyle} className="icon">
                <Icon outlined = {false} icon = {icon}/>
            </div>
            {
                showText &&
                <p style = {textStyle}>{text}</p>
            }
        </div>
    );
}

export default IconText;