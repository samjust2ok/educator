import styled from "styled-components";

const StyledDropBox = styled.div`
    position: relative;

    .Title{
        display:flex;
        align-items:center;
        font-size: 1.2rem;
    

        .Icon{
            display:flex;
            align-items:center;
            pointer-events:none;
        }

        p{
            margin-right: 10px;
            pointer-events:none;
        }
    }

    .Drop{
        position: absolute;
        padding: 20px 0;
        background-color: white;
        min-width:150px;
        top: calc(100% + 15px);
        /* left: -80%; */
        border-radius: 12px;
        z-index:100;
        box-shadow: 0px 0px 12px rgba(0,0,0,.08);
        max-height: 300px;

        ul{
            list-style-type:none;
        }
    }
`;


const StyledDropBoxList = styled.li`
    width: 100%;
    font-size:1.2rem;
    padding: 5px 20px;
    
`
export {StyledDropBox as default, StyledDropBoxList};