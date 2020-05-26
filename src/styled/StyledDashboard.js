import styled from 'styled-components';
import fromAndBelow from '../utils/styledUtils';

const SIDEBAR_MAIN_WIDTH = 250;
const SIDEBAR_SMALL_WIDTH = 100;
const StyledDashboard = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-wrap: nowrap;
    

    & > .Sidebar{
        width: ${SIDEBAR_MAIN_WIDTH}px;
        flex: 0 1 auto;
        height:100%;
        background-color: ${props=>props.theme.secondaryBg};
    }

    & > .Main{
        width: calc(100% - ${SIDEBAR_MAIN_WIDTH + 'px'});
        flex: 1 1 auto;
        height: 100%;
        background-color: ${props=>props.theme.primaryBg};
    }

    ${fromAndBelow.laptop`
        & > .Sidebar{
            width: ${SIDEBAR_SMALL_WIDTH}px;
        }

        & > .Main{
            width: calc(100% - ${SIDEBAR_SMALL_WIDTH + 'px'});
        }
    `}
`

export default StyledDashboard;