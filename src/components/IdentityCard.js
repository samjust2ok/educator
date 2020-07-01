import React from 'react';
import StyledIdentityCard from '../styled/StyledIdentityCard';

const IdentityCard = ({name,image,children})=>{
    return (
        <StyledIdentityCard>
            <div className="Image Flex-C">
                <img src={image} alt=""/>
            </div>
            <div className="Name">
                <p>{name}</p>
            </div>
            {
                children &&
                <div className = "Others">
                    {
                        children
                    }
                </div>
            }
        </StyledIdentityCard>
    )
}

export default IdentityCard;