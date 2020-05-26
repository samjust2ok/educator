import React, { useEffect } from 'react';
import StyledManage, { Header, Welcome,StudentManager } from '../styled/StyledManageResult';
import DropBox from '../components/DropBox';
import Icon from '../components/Icon';
import School from '../components/School';

const SortOption = [
    {
        title: "Lowest Scores"
    },
    {
        title: "Highest Scores",
    },
    {
        title: "Male"
    },
    {
        title: "Female",
    },
    {
        title: "All"
    }
]

const SubjectOption = [
    {
        title: "Mathematics"
    },
    {
        title: "Fine Art",
    },
    {
        title: "Social Science"
    },
    {
        title: "Physical Health Education",
    },
    {
        title: "Social Sciences"
    },
    {
        title: "Fine Art",
    },
    {
        title: "Social Science"
    },
    {
        title: "Physical Health Education",
    },
    {
        title: "Social Sciences"
    },
    {
        title: "Fine Art",
    },
    {
        title: "Social Science"
    },
    {
        title: "Physical Health Education",
    },
    {
        title: "Social Sciences"
    }
]

const ClassOption = [
    {
        title: "JSS 2B"
    },
    {
        title: "JSS 3B",
    },
    {
        title: "JSS 4B"
    },
    {
        title: "JSS 5B",
    },
    {
        title: "JSS 6B"
    }
]
function Manage(){
    useEffect(()=>{
        document.title = "Manage Result"
    },[])
    return (
        <StyledManageResult>
            <main className="Main">
                <Header>
                    <div className="Header">
                        <div className="PageTitle">
                            <h3>Dashboard</h3>
                        </div>
                        <div className="Actions">
                            <div className="Sort">
                            <DropBox options = {SortOption} title = "Sort"/>
                            </div>
                            <div className="Search">
                                <div className="Search-Container">
                                    <Icon icon = 'search'/>
                                </div>
                            </div>
                        </div>

                    </div>
                </Header>
                <Welcome>
                    <div className="Welcome">
                        <div>
                        <h1>Welcome</h1>
                        <p>Please update your students result from here</p>
                        </div>
                    </div>
                    <div className="Image">

                    </div>
                </Welcome>
                <StudentManager>

                </StudentManager>
            </main>
            <aside className="Aside">
                <div className="Aside-Content">
                    <School logo = {require('../images/orogun.png')} name = "Orogun Grammar School"/>

                    <div className="Selectors">
                        <div className="Select Select-Subject">
                            <h3>Select Subject</h3>
                            <DropBox options = {SubjectOption} title = "English Language"/>
                        </div>
                        <div className="Select Select-Class">
                            <h3>Select Class</h3>
                            <DropBox options ={ ClassOption} title = "JSS 1D"/>
                        </div>
                    </div>
                </div>
            </aside>
        </StyledManageResult>
    )
}

export default Manage;