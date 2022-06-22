import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 300;
  font-family: Forum;
  font-weight: 400;
  p {
    line-height: 18px;
    word-break: break-all;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      line-height: 1.2;
    }
    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
`;

export const ModalClose = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 500px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffefd1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 425px) {
    width: 85%;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 25px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid #5a5b44;
  padding-bottom: 15px;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    transition: all 0.5s ease;
    &:hover {
      color: #000;
    }
  }
`;
