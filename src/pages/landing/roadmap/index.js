import React from "react";
// @import components
import Section from "../../../components/common/section";
// @import resources
import eye from "../../../assets/images/eye.svg";
import roadmap from "../../../assets/images/roadmap.svg";
// @import styles
import { RoadmapContainer, RoadmapLeft, RoadmapRight } from "./roadmap.styled";

const Roadmap = () => {
  return (
    <Section color="#5A5B44">
      <RoadmapContainer>
        <RoadmapLeft
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>{"Roadmap"}</h3>
          <p>
            {
              "The biggest goal is to build our first Eco Retreat, but in between we want to let you feel the energies and vibes of what it will come."
            }
            <br />
            <br />
            {"Under promise. Over deliver."}
          </p>
          <img src={eye} alt={"eye"} />
        </RoadmapLeft>
        <RoadmapRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <img src={roadmap} alt={"roadmap"} />
          <p>{"It’s just the beginning "}</p>
        </RoadmapRight>
      </RoadmapContainer>
    </Section>
  );
};

export default Roadmap;
