import styled from "styled-components";

const StyledNavigationCard = styled.div`
    width: 100%;
    padding: 20px;
    height: 100px;
    display:flex;
    align-items:center;

    :hover{
        .Content{
            transform:scale(1.05)
        }
    }

    & > .Content{
        transition: transform 200ms ease-in;
        transform-origin: left;
        .Details{
            h3{
                font-size: 1.3rem;

                span{
                    font-size:1.2rem;
                    font-weight:400;
                    color: #9da1a7;
                }
            }

            p{
                font-size: 1.2rem;
                color: #cdd1da;
            }
        }
    }
    
`;

export default StyledNavigationCard;