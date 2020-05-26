import React from 'react';
import StyledButton from '../styled/StyledButton';


const Button = ({type = "primary", children, ...props})=>{
    return (
        <StyledButton type = {type} {...props}>
            {
                children
            }
        </StyledButton>
    );
}

export default Button;