import React, { useEffect } from 'react';
import StyledManageStudents from '../styled/StyledManageStudents';

function ManageStudents(){
    useEffect(()=>{
        document.title = "Manage Students"
    },[])
    return (
        <StyledManageStudents>
            
        </StyledManageStudents>
    )
}

export default ManageStudents