import React, { useReducer, useEffect } from 'react';
import StyledPanel from '../styled/StyledPanel';
import Management from '../containers/Management';
import { SHOW_PROFILE_CARD, SET_SELECTED_PROFILE } from '../constants/actions';
import Profile from '../components/Profile';

export const PanelContext = React.createContext();

const reducer = (state,action)=>{
    switch(action.type){
        case SHOW_PROFILE_CARD:
            return {
                ...state,
                showProfileSection: action.payload.show
            }
        case  SET_SELECTED_PROFILE:
            return {
                ...state,
                profile: action.payload.selectedProfile
            }
        default:
            return state;
    }
}



const Panel = ()=>{
    const initalState = {
        showProfileSection: false,
        selectedProfile: null,
        setshowProfileSection: (show)=>{
            dispatch({
                type: SHOW_PROFILE_CARD,
                payload: {
                    show
                }
            })
        },
        setSelectedProfile: (selectedProfile)=>{
            console.log("SELECTED", selectedProfile)
            dispatch({
                type: SET_SELECTED_PROFILE,
                payload: {
                    selectedProfile,
                }
            })
        }
    }

    let [state,dispatch]  = useReducer(reducer,initalState)
    let { showProfileSection, profile} = state;

    return (
        <StyledPanel showprofile = {showProfileSection}>
           <PanelContext.Provider value = {state}>
                <header className="NavigationPane">

                </header>
                {
                    !showProfileSection &&
                    <aside className="Sidebar">

                    </aside>
                }
                <main className="Main Scroll-Y">
                    <Management/>
                </main>
                {
                    showProfileSection && profile &&
                    <aside className = "Profile">
                        <Profile profile = {profile}/>
                    </aside>
                }
           </PanelContext.Provider>
        </StyledPanel>
    );
}

export default Panel;