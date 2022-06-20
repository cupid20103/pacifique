import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;
