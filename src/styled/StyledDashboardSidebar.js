import styled from 'styled-components';
import fromAndBelow from '../utils/styledUtils';


const StyledDashboardSidebar = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0;
    display:grid;
    grid-auto-rows: 45px 1fr 50px;
    
    .Logo{
        height: 100%;
    }
    .Navigations{
        width:100%;
        height: 100%;
        padding: 40px 0;
    }

    .Logout{
        height: 100%;
        
        .Logout-Content{
            padding:0 40px;

        }
    }

    ${fromAndBelow.laptop`
        .Logout{
            .Logout-Content{
                padding:0 30px;
            }
        }
    `}
`

export default StyledDashboardSidebar;