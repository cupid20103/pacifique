import React from "react";
import Action from "../../../components/common/action";
// @import components
import Section from "../../../components/common/section";
// @import styles
import { NatureContainer, NatureContent, NatureGroup } from "./nature.styled";

const Nature = () => {
  return (
    <Section paddingTop={"0"} height={"80vh"}>
      <NatureContainer>
        <NatureGroup
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <NatureContent>
            <h3>
              {"Authentic, smart & timeless"}
              <br />
              {"EcoRetreats for mindful travelers"}
            </h3>
            <p>
              {
                "Reconnect with your inner-self and nature while enjoying new experiences around the world"
              }
            </p>
            <Action content={"Discover More"} link={"places"} mode={"scroll"} />
          </NatureContent>
        </NatureGroup>
      </NatureContainer>
    </Section>
  );
};

export default Nature;
