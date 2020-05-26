import React, { useEffect } from 'react';
import StyledManageClasses from '../styled/StyledManageClasses';


function ManageClasses(){
    useEffect(()=>{
        document.title = "Manage Classes"
    },[])
    return (
        <StyledManageClasses>
            
        </StyledManageClasses>
    )
}

export default ManageClasses;