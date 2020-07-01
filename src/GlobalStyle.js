import { createGlobalStyle } from 'styled-components';


const SPACE = 15;
const GlobalStyle = createGlobalStyle`
    *::before,
    *::after,
    *{
        box-sizing:border-box;
        outline:none;
        margin:0;
        padding:0;
        -webkit-tap-highlight-color: transparent;
    }

    
    html,body{
        margin:0;
        font-size: 68.5%;
        padding:0;
        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
         user-select: none;
         font-family: Poppins, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        height:100%;
        width:100%;
        color: black;
    }

    #root {
        min-height:100vh;
        height:100%;
    }

    .Scroll-Y{
        overflow-y:auto;
        overflow-x:hidden !important;
        /* overflow: -moz-scrollbars-none;  */
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            width:5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius:7px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555; 
        }
    }

    .Scroll-X{
        overflow-y:hidden;
        overflow-x:auto;
        overflow: -moz-scrollbars-none; 
        -ms-overflow-style: none;
        &::-webkit-scrollbar { 
            display:none;
        }
    }

    .Link{
        text-decoration: none;
        color: inherit;

        :active{
            color:default;
        }
    }
    
    .Flex-C{
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .P-R{
        padding-right:${SPACE + 'px'};
    }

    .P-L{
        padding-left:${SPACE + 'px'};
    }

    .M-R{
        margin-right:${SPACE + 'px'};
    }

    .M-L{
        margin-left: ${SPACE + 'px'};
    }

    .M-R-10{
        margin-right:10PX;
    }

    .M-L-10{
        margin-left:10PX;
    }

    .I-16{
        font-size: 16px;
    }

    .Ripple{
        background-position: center;
        transition: background 0.8s;

        :hover {
        background: #6f52ed radial-gradient(circle, transparent 1%, #6f52ed 1%) center/15000%;
        }
        
        :active {
            background-color: #6f52edbd;
            background-size: 100%;
            transition: background 0s;
        }
    }

    .Shadow{
        box-shadow:0px 2px 5px 0px #dad2d2;
    }

    .Close{
        height:35px;
        width:35px;
        border-radius: 50%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .Close:hover{
        background-color: #f8f5fd;
        i{
            color: #6f52ed;
        }
    }

`

export default GlobalStyle;