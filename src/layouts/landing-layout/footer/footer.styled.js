import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
  text-align: center;
  font-family: Forum;
  @media screen and (max-width: 1024px) {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    justify-content: space-between;
    padding: 0 25px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > :first-child {
    padding: 0 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    & > * {
      padding: 0 5px !important;
    }
  }
  @media screen and (max-width: 425px) {
    padding-bottom: 15px;
  }
`;

export const ActionLink = styled.a`
  padding: 0 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;
