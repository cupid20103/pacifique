import React from "react";
// @import components
import Section from "../../../components/common/section";
// @import resources
import fondation from "../../../assets/images/fondation.png";
import people from "../../../assets/images/people.svg";
// @import styles
import {
  FondationContainer,
  FondationLeft,
  FondationRight,
} from "./fondation.styled";

const Fondation = () => {
  return (
    <Section color="#5A5B44" height={"600px"} image={fondation}>
      <FondationContainer>
        <FondationLeft
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <img src={people} alt={"people"} />
        </FondationLeft>
        <FondationRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <b>{"Giving back is our priority"}</b>
          <h3>{"FONDATION PACIFIQUE"}</h3>
          <p>
            {
              "We are here to offer so much more than a luxury hotel memberships."
            }
            <br />
            <br />
            {
              "Fondation Pacifique was born from the desire to look after the people and environment that has got us this far today. We come from scratch, from a difficult reality, where dreams are often broken even before they have had the chance to blossom."
            }
            <br />
            <br />
            {
              "Fondation Pacifique will therefore pledge 5% of its minting proceeds and 1% of all secondary market transactions to the foundation treasury."
            }
            <br />
            <br />
            {
              "Your input is vital to this team - that’s why we decided to give to all members a right to vote on the community treasury decisions."
            }
          </p>
        </FondationRight>
      </FondationContainer>
    </Section>
  );
};

export default Fondation;
