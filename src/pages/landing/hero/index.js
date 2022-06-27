import React from "react";
// @import resources
import poster from "../../../assets/images/poster.svg";
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
          {/* <source src="https://uploads-ssl.webflow.com/61e9d1095d09e7c706664173/626ba9d0cdd51f2c7c7fdeb4_homevideo-transcode.mp4" /> */}
          <source src="#" />
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
