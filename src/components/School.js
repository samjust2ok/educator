import React from 'react';
import StyledSchool from '../styled/StyledSchool';

const School = ({name,logo})=>{
    return (
        <StyledSchool>
            <div className="Logo">
                <img src={logo} alt=""/>
            </div>
            <div className="Name">
                <p>{name}</p>
            </div>
        </StyledSchool>
    )
}

export default School;