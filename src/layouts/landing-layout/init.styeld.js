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
    content: "Welcome";
  }
  25% {
    content: "Bienvenue";
  }
  50% {
    content: "Benvenuti";
  }
  75% {
    content: "مَرْحَباً";
  }
  100%{
    content: "Welcome";
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
      content: "Welcome";
      animation: ${fontAnimation} 2s;
    }
    font-size: 24px;
    color: #5a5b44;
    font-family: Forum;
  }
`;
