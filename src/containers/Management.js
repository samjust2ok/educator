import React from 'react';
import StyledManagement, {StyledManagementNavigation, StyledManagementMain} from '../styled/StyledManagement';
import { MANAGEMENT_DASHBOARD_ROUTE_ORDER, MANAGEMENT_DASHBOARD_ROUTES } from '../constants/dashboard';
import NavigationCard from '../components/NavigationCard';
import { DASHBOARD_ROUTES } from '../constants/dashboard';
import ManageClasses from './ManageClasses';
import ManageStaffs from '../containers/ManageStaffs';
import ManageSubjects from './ManageSubjects';
import ManageStudents from '../containers/ManageStudents';
import {
    Switch,
    Route,
} from "react-router-dom";

const VALUES = [24,108,54,1012]



const routes = [
    {
        path: MANAGEMENT_DASHBOARD_ROUTES.MANAGE_STAFF.path,
        main: ManageStaffs
    },
    {
        path: MANAGEMENT_DASHBOARD_ROUTES.MANAGE_STUDENTS.path,
        main: ManageStudents,
    },
    {
        path: MANAGEMENT_DASHBOARD_ROUTES.MANAGE_CLASSES.path,
        main: ManageClasses,
    },
    {
        path: MANAGEMENT_DASHBOARD_ROUTES.MANAGE_SUBJECTS.path,
        main: ManageSubjects,
    }
]

const Management = ()=>{
    return (
        <StyledManagement>
            <div className="Header">
                <h1>
                    Management
                </h1>
                <p>Manage School activities</p>
            </div>
            <StyledManagementNavigation>
                {
                    MANAGEMENT_DASHBOARD_ROUTE_ORDER.map((order,index)=>{
                        let { path, name, icon, color1, color2, desc } = MANAGEMENT_DASHBOARD_ROUTES[order];
                        return (
                            <NavigationCard
                            to = {path}
                            icon = {icon}
                            iconBackgroundColor = {color1}
                            iconColor = {color2}
                            text = {name}
                            key = {index}
                            value = {VALUES[index]}
                            desc = {desc}
                            />
                        );
                    })
                }
            </StyledManagementNavigation>
            <StyledManagementMain>
                <Switch>
                {routes.map((route, index) =>{
                    return (
                        <Route
                        key={index}
                        path={route.path}
                        exact={true}
                        children={<route.main/>}
                        />
                    )
                    }
                )}
                </Switch>
            </StyledManagementMain>
        </StyledManagement>
    );
}

export default Management;