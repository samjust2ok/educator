import styled from 'styled-components';

const StyledManageStaff = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom:20px;
    display:flex;
`;

const StyledManageStaffHeader = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    padding: 20px;
    border-bottom: 1px solid #f0f3f5; /* BORDER */
    flex-shrink:0;

    .Left{
        display:flex;
        align-items:center;
        h3{
            font-size: 1.8rem;
            font-weight:600;
        }

        span{
            font-size: 1.1rem;
            color: #525354;
        }

        
    }

    .Right{
        display:flex;
    }

`;

const StyledManageStaffTab = styled.div`
    width:100%;
    flex-shrink: 0;
    flex-grow:1;
    .TableContainer{
        height:480px;
    }
`;

const StyledPagination = styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-shrink:0;
    align-items:center;
    justify-content:center;
    flex-shrink:0;
`;

export { StyledManageStaff as default, StyledManageStaffHeader,StyledManageStaffTab, StyledPagination};