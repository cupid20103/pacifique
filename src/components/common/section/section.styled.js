import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: ${(props) => props.height};
  padding-top: ${(props) => props.paddingTop};
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.image});
  background-size: ${(props) => props.bgsize};
  background-position: ${(props) => props.bgpos};
  background-repeat: no-repeat;
  backdrop-filter: url(${(props) => props.image2});
  @media screen and (max-width: 768px) {
    height: fit-content;
    background-size: ${(props) => props.mbgsize};
  }
`;
