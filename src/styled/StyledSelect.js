import styled from 'styled-components';

const StyledSelect = styled.div`
    width:100%;
    position:relative;


    .Selector{
        width:100%;
        position:relative;
        cursor: pointer;

        .SelectorDisplay{
            width: 100%;
            position:relative;
            height: 35px;
            border-bottom: 1.5px solid ${props=>props.error ? '#d93025' : '#dadcde'};
            transition: .2s;
            z-index:1;

            .PlaceHolder{
                pointer-events:none;
                position: absolute;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#929598;
                transition: transform 150ms cubic-bezier(0.4,0,0.2,1),opacity 150ms cubic-bezier(0.4,0,0.2,1);
                transform-origin: top left;
            }

            .Value{
                pointer-events:none;
                position: absolute;
                text-transform:capitalize;
                top:50%;
                transform: translateY(-50%);
                font-size:14px;
                color:#5f6368;
            }

            .PlaceHolder[optionselected = false]{
                transform: scale(.75) translateY(-35px);
                color:${props=>props.error ? '#d93025':'#5f6368'};
                background-color:white;
            }
        }

        .SelectorDisplay[focused = true]{
             border-bottom: 1.5px solid ${props=>props.error ? '#d93025':props.theme.primaryC}
        }

        .SelectorDisplay[focused = true] .PlaceHolder{
            transform: scale(.75) translateY(-35px);
            color:${props=>props.error ? '#d93025':'#1a73e8'};
            background-color:white;
        }

        .Icon{
            position:absolute;
            right: 10px;
            top:50%;
            transform: translateY(-50%);
            color: ${props=>props.theme.primaryText};

            i{
                width:10px;
            }
        }
    }

    .InfoField{
        font-size:12px;
        
        .Error{
            color:#d93025;

            span{
                margin-right:7px;
            }
        }

        .Info{

        }
    }

    .Options{
        position:absolute;
        top:-50%;
        width:100%;
        background-color:white;
        padding:10px 0;
        width: 200px;
        left: -30px;
        transform: translateY(-50%);
        z-index:100;
        border-radius:5px;
        margin:15px 0;
        z-index:10000;
        min-height: 100px;
        overflow:scroll;
        max-height:400px;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);

        li{
            padding: 10px 15px;
            font-size: 14px;
            
            :hover{
                background-color: rgba(0,0,0,.05);
            }
        }
    }
`;

export default StyledSelect;