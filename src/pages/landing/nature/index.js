import React from "react";
import Action from "../../../components/common/action";
// @import components
import Section from "../../../components/common/section";
// @import resources
import nature from "../../../assets/images/nature.jpg";
// @import styles
import { NatureContainer, NatureContent, NatureGroup } from "./nature.styled";

const Nature = () => {
  return (
    <Section paddingTop={"0"} height={"80vh"} image={nature}>
      <NatureContainer>
        <NatureGroup
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <NatureContent>
            <h3>
              {"Authentic, smart &"}
              <br />
              {"timeless Eco-Retreats"}
              <br />
              {"for mindful travelers"}
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
