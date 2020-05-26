import React from 'react';
import StyledDashboard from '../styled/StyledDashboard';
import {
    Switch,
    Route,
} from "react-router-dom";
import { DASHBOARD_ROUTES } from '../constants/dashboard';
import ManageResult from '../containers/ManageResult';
import AdminSettings from '../containers/AdminSettings';
import ManageTeachers from '../containers/ManageTeachers';
import ManageStudents from '../containers/ManageStudents';
import SchoolCalendar from '../containers/SchoolCalendar';
import DashboardSidebar from '../components/DashboardSidebar';


const routes = [
    {
        path: DASHBOARD_ROUTES.MANAGE_RESULT.path,
        main: ManageResult
    },
    {
        path: DASHBOARD_ROUTES.ADMIN_SETTINGS.path,
        main: AdminSettings,
    },
    {
        path: DASHBOARD_ROUTES.MANAGE_STAFF.path,
        main: ManageTeachers,
    },
    {
        path: DASHBOARD_ROUTES.MANAGE_STUDENTS.path,
        main: ManageStudents,
    },
    {
        path: DASHBOARD_ROUTES.SCHOOL_CALENDAR.path,
        main: SchoolCalendar,
    }
]

const Dashboard = ()=>{
    return (
        <StyledDashboard>
           <aside className="Sidebar">
            <DashboardSidebar/>
           </aside>
           <main className="Main">
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
           </main>
        </StyledDashboard>
    );
}

export default Dashboard;