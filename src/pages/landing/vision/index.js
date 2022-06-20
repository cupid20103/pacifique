import React from "react";
import Action from "../../../components/common/action";
// @import components
import Section from "../../../components/common/section";
// @import resources
import visionCT from "../../../assets/images/vision_content.svg";
// @import styles
import {
  VisionContainer,
  VisionContent,
  VisionImages,
  VisionLeft,
  VisionRight,
} from "./vision.styled";

const Vision = () => {
  return (
    <Section paddingTop={"0"} height={"80vh"}>
      <VisionContainer>
        <VisionLeft
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>{"Vision"}</h3>
          <VisionContent>
            <p>
              {
                "Pacifique Avant Garde is a multicultural experience. A creative universe willing to provide timeless experiences and spaces where humans can connect, learn and relax."
              }
              <br />
              <br />
              {
                "We want to take you to an emotional journey full of flavors, wellbeing, discoveries and memories; our vision of living."
              }
              <br />
              <br />
              {
                "A melting pot of hospitality, design, art, fashion, music, gastronomy, knowledge and travel; enter a new extra-sensorial dimension."
              }
            </p>
            <Action link={"/values"} content={"Our Values"} />
          </VisionContent>
        </VisionLeft>
        <VisionRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <VisionImages>
            <img src={visionCT} alt={"vision content"} />
          </VisionImages>
        </VisionRight>
      </VisionContainer>
    </Section>
  );
};

export default Vision;
