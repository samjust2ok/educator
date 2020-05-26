import React from 'react';
import StyledDashboardSidebar from '../styled/StyledDashboardSidebar';
import Logo from './Logo';
import NavigationList from './NavigationList';
import { DASHBOARD_ROUTES, DASHBOARD_ROUTE_ORDER } from '../constants/dashboard';
import IconText from './IconText';
import theme from '../constants/theme';
import { useMatch } from '../utils/customHooks';

const DashboardSidebar = ()=>{
    const matches = useMatch('(min-width:1024px)');
    return (
        <StyledDashboardSidebar>
            <div className = "Logo">
                <Logo/>
            </div>
            <div className="Navigations">
                {
                    DASHBOARD_ROUTE_ORDER.map((order,index)=>{
                         let route = DASHBOARD_ROUTES[order]
                        return <NavigationList key = {index} text = {route.name} icon = {route.icon} path = {route.path}/>
                    })
                }
            </div>
            <div className = "Logout">
                <div className="Logout-Content">
                    <IconText showText = {matches} iconColor = {theme.secondaryColor} text = 'Logout' icon = 'exit_to_app'/>
                </div>
            </div>
        </StyledDashboardSidebar>
    );
}

export default DashboardSidebar;