import styled from 'styled-components';
// import { devices } from '../utils/styledUtils'


const StyledInput = styled.div`
    width:100%;
    cursor: pointer;


    .InputField{
        display:flex;
        width:100%;
        position:relative;

        .InputContainer{
            width: 100%;
            flex-grow:1;
            position:relative;

            input{
                width:100%;
                height: 35px;
                border:none;
                border-bottom: 1.5px solid ${props=>props.error ? '#d93025' : '#dadcde'};
                transition: .2s;
                z-index:1;
                font-weight:500;
                font-size:1.2rem;
                color:#313131;
                background-color:inherit;
            }

            input:focus{
                border-bottom: 1.5px solid ${props=>props.error ? '#d93025':props.theme.primaryC}
            }

            
            div{
                pointer-events:none;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#929598;
                transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
                transform-origin: top left;
            } 

            input[hasinput = true] ~ div{
                transform: scale(.75) translateY(-35px);
                color:${props=>props.error ? '#d93025':'#929598'};
            }

            input:focus ~ div{
                transform: scale(.75) translateY(-35px);
                color:${props=>props.error ? '#d93025':props.theme.primaryC};
            }

        }

        .Icon{
            position:absolute;
            right: 10px;
            top:50%;
            transform: translateY(-50%);
            color:${props=>props.theme.primaryText};
        }
    }

    .InfoField{
        font-size:12px;
        
        .Item{
                align-items:center;
                display:flex;
                span{
                    margin-left:7px;
                }
        }

        .Success{
            align-items:center;
            color:green;
        }
        
        .Error{
            color:#d93025;
        }

        .Info{
            margin:0;
        }
    }
`;

export default StyledInput;