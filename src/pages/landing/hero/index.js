import React from "react";
// @import resources
import video from "../../../assets/images/video.mp4";
import poster from "../../../assets/images/poster.png";
// @import styles
import {
  HeroContainer,
  HeroBack,
  HeroContent,
  HeroSubTitle,
} from "./hero.styled";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroBack>
        <video autoPlay loop muted poster={poster}>
          <source src={video} />
        </video>
      </HeroBack>
      <HeroContent>
        <h2>
          {"Raw & Authentic"}
          <br />
          {"Experiences"}
        </h2>
        <HeroSubTitle>
          <p>{"Wellbeing"}</p>
          <p>{"Culture"}</p>
          <p>{"Connections"}</p>
          <p>{"Discovering"}</p>
        </HeroSubTitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
