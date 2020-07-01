import styled from "styled-components";


const StyledIdentityCard = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;

    .Image{
        overflow:hidden;
        
        img{
            height: 130px;
            background-color: rgb(228,230,231);
            width: 130px;
            object-fit:cover;
            object-position:0 13px;;
            border-radius:50%;
        }
    }

    .Name{
        text-align:center;
        margin-top: 20px;

        p{
            font-size: 1.3rem;
            color:black;
            font-weight: 500;
        }
    }
`;


export default StyledIdentityCard;