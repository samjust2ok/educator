import styled from "styled-components";

const StyledButton = styled.div`
    border-radius:4px;
    padding: 7px 10px;
    min-width:100px;
    background-color: ${props=>props.type === "primary" ? props.theme.primaryC : 'transparent'};
    color: ${props=>props.type === "primary" ? 'white' : props.theme.primaryC };
    display:flex;
    border: ${props=>props.type === "primary" ? '' : '1.5px solid #e6eaec' };
    align-items:center;
    justify-content:center;
    cursor: pointer;
    box-shadow: ${props=>props.type === "primary" ? '0px 2px 5px 0px #dad2d2' : "" };
    background-position: center;
    transition: background 0.8s;

    :hover {
        border:${props=>props.type === "primary" ? '' : '1.5px solid transparent' };
        background: ${props=>props.type === 'primary' ? '#6f52ed radial-gradient(circle, transparent 1%, #6f52ed 1%) center/15000%':'#ecefff'};
    }
    
    :active {
        background-color: ${props=>props.type === 'primary' ? '#6f52edbd':''};
        background-size: 100%;
        transition: background 0s;
    }

    & > .Text{
        font-size: 1.1rem;
        font-weight:500;
    }
`;

export default StyledButton;