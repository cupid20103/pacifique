import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  p {
    letter-spacing: 1px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 75px;
    p {
      font-size: 14px;
    }
  }
`;

export const FooterActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const FooterAction = styled.a`
  padding: 0 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
