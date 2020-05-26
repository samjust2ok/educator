import styled from "styled-components";

const StyledPagination = styled.div`
    display:flex;
    height: 30px;
    padding:2px 0;

    .Back{
        display:flex;
        align-items:center;
    }

    .Pages{
        display:flex;
        align-items:center;
        
        .Page{

            :hover{
            background-color: ${props=>props.theme.iconB1};
            color: ${props=>props.theme.primaryC};
            }


            height:25px;
            width: 25px;
            border-radius:50%;
            font-size:1.1rem;
            margin:0 10px;
            cursor: pointer;

            p{
                height:100%;
                width:100%;
            }
        }

        .Selected{
            background-color: ${props=>props.theme.primaryC} !important;
            color: white !important;
        }
    }

    .Forward{
        display:flex;
        align-items:center;
    }

    .SelectPage{
        display:flex;
        align-items:center;
        margin:0 20px;
        padding: 0 20px;
        border-left:1px solid #e8e8f3;

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }

                p{
            font-size:1.2rem;
        }
        .EnterPage{
            width:25px;
            height:25px;
            border-radius:3px;
            border: 1px solid #8b8a90;
            padding: 0 5px;
            font-size:12px;

            :focus{
                border: 1px solid ${props=>props.theme.primaryC};
            }
        }
    }
    .Pager{
        margin: 7px;
        border-radius:50%;

        i{
            font-size:17px;
        }
    }

    .S{
        display:flex;
        align-items:center;
        justify-content:center;
        i{
            width: 7px;
            font-size:17px;
            height:100%;
        }
    }
`;

export default StyledPagination;