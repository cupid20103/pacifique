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

const fontAnimation = keyframes`
  0% {
    content: "WELCOME";
  }
  25% {
    content: "BIENVENUE";
  }
  50% {
    content: "BENVENUTI";
  }
  75% {
    content: "مَرْحَباً";
  }
  100%{
    content: "WELCOME";
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
  animation: ${loader} 3s ease-in-out;
  & > .welcome {
    ::after {
      content: "WELCOME";
      animation: ${fontAnimation} 2s;
    }
    font-size: 24px;
    color: #5a5b44;
    font-family: Forum;
  }
`;
