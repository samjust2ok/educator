import styled from "styled-components";

const StyledExpandableSearch = styled.div`
    display:flex;
    margin-right:20px;

    .Button{
        padding: 7px 10px;
        background-color: ${props=>props.showInput ? '#e8ecf3' : props.theme.primaryC};
        border-radius: ${props=>props.showInput ? '0px 4px 4px 0px' : '4px'};
        display:flex;
        border:none;
        border-left: ${props=>props.showInput ? '1px solid #d8deec' : ''};
        align-items:center;
        cursor: pointer;
        

        i{
            color: ${props=>props.showInput ?  props.theme.primaryC : 'white'}
        }
    }

    .Input{
        width: ${props=>props.showInput ? '500px' : 0};
        transition: width 300ms;
        opacity: ${props=>props.showInput ? 1 : 0};
        background-color: #e8ecf3;
        border-right:none;
        border-radius:4px 0px 0px 4px;
        padding:0 15px;
        font-size:1.3rem;
        border:none;

        ::placeholder{
            color: #cdd1da;
        }
    
    }
`;

export default StyledExpandableSearch;