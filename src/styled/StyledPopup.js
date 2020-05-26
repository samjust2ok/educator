import styled, {keyframes} from "styled-components";


const zoom = keyframes`
    0%{
        transform: scale(0.9);
    }
    100%{
        transform: scale(1);
    }
`;

const bg = keyframes`
    0%{
        background: #0b134c73;
    }
    100%{
        background:#0b134c99;
    }
`;
const StyledPopup = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1000;
    animation: ${bg} 300ms;
    background:#0b134c99;

`;


const StyledPopupContent  = styled.div`
    background-color:white;
    min-height:400px;
    max-height: 80%;
    box-shadow:0px 5px 15px rgba(0,0,0,.08);
    border-radius:2px;
    animation: ${zoom} 300ms ease-in-out;
    
`;

export { StyledPopup, StyledPopupContent}