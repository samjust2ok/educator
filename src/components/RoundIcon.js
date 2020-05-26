import React from 'react';
import StyledRoundIcon from '../styled/StyledRoundIcon';
import Icon from './Icon';

const RoundIcon = ({icon, iconColor, backgroundColor})=>{
    return (
        <StyledRoundIcon className = "Flex-C" bg = {backgroundColor}>
            <Icon style = {{color: iconColor}} icon = {icon}/>
        </StyledRoundIcon>
    )
}

export default RoundIcon;