import React from 'react';
import StyledDashboard from '../styled/StyledDashboard';
import {
    Switch,
    Route,
} from "react-router-dom";
import StyledPanel from '../styled/StyledPanel';
import Management from '../containers/Management';


const Panel = ()=>{
    return (
        <StyledPanel>
           <header className="NavigationPane">

           </header>
           <aside className="Sidebar">

           </aside>
           <main className="Main Scroll-Y">
                <Management/>
           </main>
        </StyledPanel>
    );
}

export default Panel;