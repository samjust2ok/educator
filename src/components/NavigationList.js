import React from 'react';
import StyledNavigationList from '../styled/StyledNavigationList';
import Icon from './Icon';
import { useLocation, Link } from 'react-router-dom';
import IconText from './IconText';
import theme from '../constants/theme';
import { useMatch } from '../utils/customHooks';

const NavigationList = ({icon, text, path})=>{
    const location = useLocation();
    const isActive = location.pathname === path;

    const matches = useMatch('(min-width:1024px)');

    return (
            <StyledNavigationList isActive = {isActive}>
                <Link className = "Link" to = {path}>
                    <div className  = "Link-Content">
                        <IconText
                        showText = {matches}
                        icon = {icon}
                        text = {text}
                        iconColor = {isActive ? theme.primaryColor : theme.secondaryTC}
                        textColor = {isActive ? theme.primaryTC : theme.secondaryTC}
                        />
                    </div>
                </Link>
            </StyledNavigationList>
    );
}

export default NavigationList;