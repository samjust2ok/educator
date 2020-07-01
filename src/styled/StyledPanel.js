import styled from "styled-components";

const StyledPanel = styled.div`
    height:100%;
    width:100%;
    overflow:hidden;
    display:grid;
    grid-template-columns: ${props=>props.showprofile ? '1fr 350px':'60px 1fr'};
    grid-template-rows: 60px 1fr;

    .NavigationPane{
        width: 100%;
        grid-column: ${props=>props.showprofile ? '1 / span 1':' 2 / -1'};
        background-color:${props=>props.theme.secondaryBg};
        box-shadow: -5px -5px 10px #c3bebe;
        z-index:10;
    }

    .Sidebar{
        width: 100%;
        grid-column: 1 / span 1;
        grid-row: 1 / span 2;
        background-color: ${props=>props.theme.tertiaryBg};
        z-index:15;
    }

    .Main{
        width: 100%;
        grid-column: ${props=>props.showprofile ? '1 / span 1':' 2 / -1'};
        background-color:${props=>props.theme.primaryBg};;
    }

    .Profile{
        width: 100%;
        grid-column: 2 / -1;
        grid-row: 1 / -1;
        transition: all .3s;
        z-index:30;
    }

`;

export default StyledPanel;