import styled from "styled-components";

const StyledPanel = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    display:grid;
    grid-template-columns: 60px 1fr;
    grid-template-rows: 60px 1fr;

    .NavigationPane{
        width: 100%;
        grid-column: 2 / -1;
        background-color:${props=>props.theme.secondaryBg};
        box-shadow: 4px -5px 10px #c3bebe;
        z-index:10;
    }

    .Sidebar{
        width: 100%;
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        background-color: ${props=>props.theme.tertiaryBg};;
    }

    .Main{
        width: 100%;
        grid-column: 2 / -1;
        background-color:${props=>props.theme.primaryBg};;
    }

`;

export default StyledPanel;