import React, { useEffect } from 'react';
import StyledManageSubjects from '../styled/StyledManageSubjects';

function ManageSubjects(){
    useEffect(()=>{
        document.title = "Manage Subjects"
    },[])
    return (
        <StyledManageSubjects>
            
        </StyledManageSubjects>
    )
}

export default ManageSubjects;