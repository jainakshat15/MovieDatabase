import styled from "styled-components";

export const Wrapper=styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
    height: 75px;
`;

export const Content=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 10px 0;
    margin: 0 auto;

    h3{
        color: white;
    }
`;


export const TMDBLogoImg=styled.img`
    width: 100px;
    @media screen and(max-width: 500px){
        width: 80px;
    }
`;