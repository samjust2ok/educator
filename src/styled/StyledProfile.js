import styled from "styled-components";

const StyledProfile = styled.div`
    width: 100%;
    height: 100%;

    .Header{
        display:flex;
        justify-content:flex-end;
        padding:5px 20px;
    }

    .Identity{
        width: 100%;
        p{
            text-align:center;
            font-size: 1.2rem;
            color:#9da1a7;
        }
    }

    .ProfileSection{
        margin: 30px 0;

        & > div{
            .button{
                display: flex;
                justify-content:center;
                p{
                    font-size:1.2rem;
                    margin-left:5px;
                }

                i{
                    font-size:18px;
                }
            }

            .content{
                margin: 20px 20px;

                h4{
                    font-size:1.3rem;
                    margin:10px 0;
                    font-weight:500;
                }
                
                & > div{
                    display:flex;
                    flex-wrap:wrap;

                    & > .Tag{
                        margin: 5px 5px 5px 0px;
                        border-radius: 25px;
                        height:30px;
                        background-color:none;
                        border:2px solid #dbdbdb;
                        cursor: pointer;
                        transition: all 200ms ease-in-out;
                        p{
                            color: black;
                            font-size: 12px;
                        }

                        i{
                            color: black;
                            font-size:20px;
                        }
                    }

                    & > .Expand{
                        padding:0;
                        height:30px;
                        width:30px;
                    }
                }
            }
        }
    }
`;

export default StyledProfile;