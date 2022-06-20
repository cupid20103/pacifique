import React from "react";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import window from "../../../assets/images/window.svg";
import girl from "../../../assets/images/girl.svg";
import drink from "../../../assets/images/drink.svg";
import bike from "../../../assets/images/bike.svg";
// @import styles
import {
  HospitalBike,
  HospitalContainer,
  HospitalContent,
  HospitalDrink,
  HospitalGallery1,
  HospitalGallery2,
  HospitalGirl,
  HospitalLeft,
  HospitalRight,
  HospitalWindow,
} from "./hospital.styled";

const Hospital = () => {
  return (
    <Section>
      <HospitalContainer>
        <HospitalLeft>
          <HospitalContent
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <h3>{"Hospitality Experiences"}</h3>
            <p>
              {
                "Ideal for like-minded creative thinkers, artists, athletes, entrepreneurs, designers, NFT passionates, foodies and adventurers, looking for an authentic and stimulating experience, well-being and inspiration, amusement and unique encounters. For the lovers of life in general."
              }
            </p>
            <Action link={"#"} content={"Coming Soon"} />
          </HospitalContent>
        </HospitalLeft>
        <HospitalRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <HospitalGallery1>
            <HospitalWindow pic={window} alt={"window"} />
            <HospitalGirl pic={girl} alt={"girl"} />
          </HospitalGallery1>
          <HospitalGallery2>
            <HospitalDrink pic={drink} alt={"drink"} />
            <HospitalBike pic={bike} alt={"bike"} />
          </HospitalGallery2>
        </HospitalRight>
      </HospitalContainer>
    </Section>
  );
};

export default Hospital;
