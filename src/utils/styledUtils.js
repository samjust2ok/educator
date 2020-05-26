import { css } from "styled-components";

const fromAndBelow = {
    mobileS: (...args)=> css`
        @media (max-width:320px){
            ${css(...args)}
        }
    `,

    mobileM: (...args)=> css`
        @media (max-width:375px){
            ${css(...args)}
        }
    `,

     mobileL: (...args)=> css`
        @media (max-width:425px){
            ${css(...args)}
        }
    `,

     mobileXL: (...args)=> css`
        @media (max-width:525px){
            ${css(...args)}
        }
    `,

    tablet: (...args)=> css`
        @media (max-width:768px){
            ${css(...args)}
        }
    `,

    laptop: (...args)=> css`
        @media (max-width:1024px){
            ${css(...args)}
        }
    `,
    laptopL: (...args)=> css`
        @media (max-width:1440px){
            ${css(...args)}
        }
    `,

    desktop: (...args)=> css`
    @media (max-width:2560px){
        ${css(...args)}
    }
    `,
}


export default fromAndBelow;