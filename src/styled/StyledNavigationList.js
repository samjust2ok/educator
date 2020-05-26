import styled from 'styled-components';
import fromAndBelow from '../utils/styledUtils';

const StyledNavigationList = styled.div`
    width: 100%;
    margin: 35px 0;
    position: relative;

    ::after{
        position:absolute;
        content: '';
        width: 3px;
        height:100%;
        background-color:blue;
        top:0;
        right:0;
        display: ${props=>props.isActive ? 'block' : 'none'};
        background-color: ${props=>props.theme.primaryColor};
        
    }

    .Link{
        width: 100%;
        text-decoration: none;
        .Link-Content{
            display: flex;
            align-items:center;
            justify-content:center;
            width: 100%;
            padding: 7px 40px;
        }
    }

    ${fromAndBelow.laptop`
        .Link{
            .Link-Content{
                padding: 7px 30px;
            }
        }
    `}

    ${fromAndBelow.laptop`
        ::after{
            display:none;
        }
    `}
`

export default StyledNavigationList;