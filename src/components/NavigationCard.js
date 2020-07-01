import React from 'react';
import A from './A';
import StyledNavigationCard from '../styled/StyledNavigationCard';
import StyledCard from '../styled/StyledCard';
import RoundIcon from './RoundIcon';


const NavigationCard = ({to, icon, iconBackgroundColor, iconColor, text, value, desc })=>{
    return (
        <A to = {to}>
            {
                isActive =>
                    <StyledCard>
                    <StyledNavigationCard color = {iconColor} isActive = {isActive}>
                        <div className = "Content Flex-C">
                            <RoundIcon icon = {icon} backgroundColor = {iconBackgroundColor} iconColor = {iconColor}/>
                            <div className = "Details M-L">
                                <h3>{value} <span>{desc}</span></h3>
                                <p>{text}</p>
                            </div>
                        </div>
                    </StyledNavigationCard>
                    </StyledCard>
            }
        </A>
    );
}

export default NavigationCard;