import React, { useContext, useState } from 'react';
import StyledProfile from '../styled/StyledProfile';
import IdentityCard from './IdentityCard';
import Icon from './Icon';
import { PanelContext } from '../pages/Panel';
import Button from './Button';
import pp from '../images/pp.png'
import { sub, classes } from '../constants/subjects';
import Tag from './Tag';
import { state } from '../constants/appConst';



const Profile = ({profile})=>{
    let { firstName, lastName, profilePicture,emailAddress } = profile;
    const { setshowProfileSection } = useContext(PanelContext);

    const closeProfile = ()=>{
        setshowProfileSection(false)
    }


    const [showAll,setShowAll] = useState({
        subjects: false,
        classes: false
    })

    return (
        <StyledProfile>
            <div className="Header">
                <div onClick = {closeProfile}  className="Close">
                    <Icon icon = "close"/>
                </div>
            </div>
            <div className="Identity Flex-C">
                <div>
                <IdentityCard image = {profilePicture || pp} name = {`${firstName} ${lastName}`}>
                    <p>{emailAddress}</p>
                </IdentityCard>
                </div>
            </div>
            <div className="AssignSubjects ProfileSection">
                <div>
                    <div className="button">
                    <Button type = "secondary">
                        <Icon icon = "create"/>
                        <p>Assign new subject</p>
                    </Button>
                    </div>
                    <div className="subjects content">
                        <h4>Assigned Subjects</h4>
                        <div>
                            {
                                sub.slice(0,showAll.subjects ? 7 : 3).map((subject,index)=>(
                                    <div key = {index} className = "Tag">
                                        <p>
                                            {subject.text}
                                        </p>
                                    </div>
                                ))
                            }
                            <div onClick = {()=>setShowAll(state=>({
                                    ...state,
                                    subjects: !state.subjects
                                }))} role = "button" className = "Tag Expand">
                                <Icon icon = {`expand_${showAll.subjects ?  'less':'more'}`}/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="AssignClass ProfileSection">
                <div>
                    <div className="button">
                    <Button type = "secondary">
                        <Icon icon = "create"/>
                        <p>Assign class</p>
                    </Button>
                    </div>
                    <div className="classes content">
                        <h4>Assigned Classes</h4>
                        <div>
                            {
                                classes.slice(0,showAll.classes ? 7 : 5).map((clas,index)=>(
                                    <div key = {index} className = "Tag">
                                        <p>
                                            {clas.class}
                                        </p>
                                    </div>
                                ))
                            }
                                <div onClick = {()=>setShowAll(state=>({
                                    ...state,
                                    classes: !state.classes
                                }))} role = "button"  className = "Tag Expand">
                                    <Icon icon = {`expand_${showAll.classes ? 'less':'more'}`}/> 
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledProfile>
    );
}

export default Profile;