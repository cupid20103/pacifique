import React from "react";
// @import components
import Section from "../../../components/common/section";
// @import resources
import shop from "../../../assets/images/shop.svg";
import giraffe from "../../../assets/images/giraffe.svg";
// @import styles
import { InspireContainer, InspireContent } from "./inspire.styled";
// @import resources
import inspired from "../../../assets/images/faq.png";

const Inspire = () => {
  return (
    <Section color="#5A5B44" image={inspired}>
      <InspireContainer>
        <h3
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          {"inspired by human connection ╮"}
        </h3>
        <InspireContent>
          <img
            src={shop}
            alt="shop"
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          />
          <p
            data-aos="fade-up"
            data-aos-duration={"1700"}
            className="aos-init aos-animate"
          >
            {"LIFE CHANGING EXPERIENCES"}
            <br />
            {"AUTHENTIC + INTIMATE"}
            <br />
            {"IN SEARCH OF THE ESSENTIAL"}
          </p>
          <img
            src={giraffe}
            alt="giraffe"
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          />
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
