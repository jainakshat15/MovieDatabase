import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: var(--darkGrey);
  text-align: center;
  position: relative;
    height: 70px;
    bottom: 0;
    @media screen and (max-width: 768px) {
            height: 80px;
            }
`;

export const Content = styled.div`

    span{
        color: white;
        font-size: var(--fontMed);

        @media screen and (max-width: 768px) {
            font-size: 15px;
            }
    }
    a{
        color: white;
    }
    .icons{
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
    .icons>*{
        padding: 5px 20px;
    }
`;