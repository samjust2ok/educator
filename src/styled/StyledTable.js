import styled from "styled-components";

const StyledTable = styled.div`
    width: 100%;
    height:100%;

    .Table{
        width:100%;
        border-collapse:collapse;

        tr{
            box-shadow: 0px 2px 1px #fbfbfb;
            cursor: pointer;
        }

        thead{
            .TableHeader{
            width:100%;
            background-color: #f8faff;
            
            th{
                text-transform: uppercase;
                font-size:1rem;
                font-weight:400;
                text-align:left;
                height:30px;
                color: #525354;
                :nth-child(1){
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }
            }
        }
    }
`;

const StyledTableRow = styled.tr`
    border:1px solid transparent;
    transition: all 200ms ease-in;
    background-color: ${props=>props.selected ? '#6f52ed0d' : 'white'};
    box-shadow: 0px 2px 1px #fbfbfb;

    :hover{
       box-shadow: 0px 7px 20px 1px rgba(0,0,0,.09) !important;
       transform: scaleX(1.01);
       z-index:50;
       border:1px solid #fbfbfb;
    }
    td{
        height:45px;
        

        p{
            font-size:1.1rem;
            color:#6e6e71;
        }
        :nth-child(1){
            display:flex;
            align-items:center;
            justify-content:center;
        }


        .Name{
            display:flex;
            align-items:center;
            height:100%;
            .ImageHolder{
                height:25px;
                width:25px;
                border-radius:50%;
                background-color: #f1f1f1;
                overflow:hidden;
                background-color: rgb(228,230,231);

                img{
                    height:100%;
                    width:100%;
                    object-position:0 3px;
                    background-color: rgb(228,230,231);
                }
            }
        }

        .Checkbox{
            width:100%;
        }
        
    }

    .Actions{
        display:flex;
        .Button{
            margin-right:20px;
            height:30px;
            width:30px;
            border-radius:50%;

            :hover{
                background-color: rgba(0,0,0,.07);
            }

            i{
                color:#525354;
                font-size:18px;
                pointer-events:none;
            }
        }
    }

`;

export {StyledTable as default, StyledTableRow};