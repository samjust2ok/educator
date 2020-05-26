import styled from "styled-components";

const StyledManagement = styled.div`
    height: 100%;
    width: 100%;
    padding: 20px 40px;
    display:flex;
    flex-direction:column;

    .Header{
        margin-bottom: 20px;
        flex-shrink:0;

        h1{
            font-size: 2.4rem;
        }

        p{
            font-size:1.3rem;
            color: #9da1a7;
        }
    }
`;


const StyledManagementNavigation = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap:20px;
    margin-bottom: 20px;
    flex-shrink:0;
`;


const StyledManagementMain = styled.div`
    width:100%;
    flex-grow:1;
    flex-shrink:0;
    min-height: 600px;
`;


export { StyledManagement as default, StyledManagementNavigation, StyledManagementMain} ;