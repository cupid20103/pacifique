import styled, { keyframes } from "styled-components";

const loader = keyframes`
  0% {
    height: 100vh;
  }
  75% {
    height: 100vh;
  }
  100% {
    height: 0;
  }
`;

const fontAnim = keyframes`
  0% {
    font-family: Forum;
  }
  25% {
    font-family: Maragsa;
    color: #5a5b44;
  }
  35%{
    color: #e74c3c;
  }
  60%{
    color: #5a5b44;
  }
  75% {
    font-family: Forum;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: hidden;
  background-color: #ffefd1;
  z-index: 500;
  animation: ${loader} 2s ease-in-out;
  & > .welcome {
    font-size: 24px;
    color: #5a5b44;
    font-family: Forum;
    animation: ${fontAnim} 2s ease-in-out;
  }
`;
