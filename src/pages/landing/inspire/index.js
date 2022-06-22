import React from "react";
// @import components
import Section from "../../../components/common/section";
// @import styles
import { InspireContainer, InspireContent } from "./inspire.styled";
// @import resources
import inspired from "../../../assets/images/faq.png";
import filter from "../../../assets/images/filter.svg";

const Inspire = () => {
  return (
    <Section color="#5A5B44" image={inspired} image2={filter}>
      <InspireContainer>
        <h3
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          {"inspired by human connection ╮"}
        </h3>
        <InspireContent
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          {"LIFE CHANGING EXPERIENCES"}
          <br />
          {"AUTHENTIC + INTIMATE"}
          <br />
          {"IN SEARCH OF THE ESSENTIAL"}
        </InspireContent>
        <h3
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          {"╰ influenced by natural landscapes"}
        </h3>
      </InspireContainer>
    </Section>
  );
};

export default Inspire;
