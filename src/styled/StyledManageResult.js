import styled from 'styled-components';

const StyledManageResult = styled.div`
    height: 100%;
    width: 100%;
    display:flex;

    & > .Main{
        flex: 1 0 auto;
        min-width: calc(100% - 280px);
        padding: 30px 0;
    }

    & > .Aside{
        width: 280px;
        flex: 0 1 auto;
        background-color:white;
        display:flex;
        justify-content:center;

        .Aside-Content{
           width:170px;
           padding:30px 0;

           .Selectors{
               margin-top:60px;

               .Select{
                   margin-bottom:40px;

                   h3{
                    font-weight: 400;
                    font-size:1.4rem;
                   }
               }
           }
            
        }
    }
`;

const Header = styled.div`
    width:100%;
    
    .Header{
        padding: 0 30px;
        display:flex;
        align-items:center;
        justify-content:space-between;

        .PageTitle{
            font-size:1.5rem;
        }

        .Actions{
            display:flex;
            align-items:center;
            

            
            .Search{
                margin-left: 70px;
                .Search-Container{
                    width:40px;
                    height:40px;
                    border-radius:7px;
                    background-color: ${props=>props.theme.tertiaryC10};
                    display:flex;
                    align-items:center;
                    justify-content:center;

                    i{
                        color: ${props=>props.theme.tertiaryC};
                    }
                }
            }
        }
    }
`;

const Welcome = styled.div`
    height:247px;
    width:100%;
    display:flex;
    align-items:flex-end;
    position: relative;
    padding: 0 30px;

    .Welcome{
        height:167px;
        background-color:${props=>props.theme.primaryColor15};
        border-radius:20px;
        width:100%;
        display:flex;
        align-items:center;
        padding: 0 40px;

        div{

            h1{
                font-size:1.5rem;
            }
            p{
                margin-top:20px;
                font-size: 1.3rem;
            }
        }
    }

    .Image{
        position: absolute;
    }
`;


const StudentManager = styled.div`

`;

export {StyledManageResult as default, Header, Welcome, StudentManager};