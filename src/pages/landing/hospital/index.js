import React from "react";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import hospital from "../../../assets/images/hospital.png";
// @import styles
import {
  HospitalContainer,
  HospitalContent,
  HospitalImage,
  HospitalLeft,
  HospitalRight,
} from "./hospital.styled";

const Hospital = () => {
  return (
    <Section height={"450px"}>
      <HospitalContainer>
        <HospitalLeft>
          <HospitalContent
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <h3>
              {"Hospitality"}
              <br />
              {"Experiences"}
            </h3>
            <p>
              {
                "Ideal for like-minded creative thinkers, artists, athletes, entrepreneurs, designers, NFT passionates, foodies and adventurers, looking for an authentic and stimulating experience, well-being and inspiration, amusement and unique encounters. For the lovers of life in general."
              }
            </p>
            <Action
              link={"boutique"}
              content={"Read More"}
              mode={"scroll"}
              hospital
            />
          </HospitalContent>
        </HospitalLeft>
        <HospitalRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <HospitalImage src={hospital} alt={"hospital"} />
        </HospitalRight>
      </HospitalContainer>
    </Section>
  );
};

export default Hospital;
