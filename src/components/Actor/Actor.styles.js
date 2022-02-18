import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;

    h3{
        margin: 10px 0 0 0;
        @media screen and (max-width: 768px) {
            margin-top : 5px;
            }
    }
    p{
        margin: 5px 0;
        @media screen and (max-width: 768px) {
            margin-top: 3px;
        }
    }
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;

    @media screen and (max-width: 768px) {
            height: 130px;
        }
`;