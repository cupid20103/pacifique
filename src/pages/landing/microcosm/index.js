import React from "react";
import { SiTwitter, SiInstagram, SiDiscord, SiMedium } from "react-icons/si";
// @import components
import Section from "../../../components/common/section";
// @import resources
import content from "../../../assets/images/vision_content.svg";
import microcosm from "../../../assets/images/microcosm.png";
// @import styles
import {
  ActionGroup,
  MicrocosmContainer,
  MicrocosmContent,
  MicrocosmLeft,
  MicrocosmRight,
} from "./microcosm.styled";

const Microcosm = () => {
  return (
    <Section
      height={"450px"}
      image={microcosm}
      bgsize={"100% 65%"}
      bgpos={"bottom"}
    >
      <MicrocosmContainer>
        <MicrocosmContent>
          <MicrocosmLeft
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <h3>
              {"Pacifique"}
              <br />
              {"avant garde"}
            </h3>
            <p>
              {
                "Join a community of likeminded Humans, willing to give birth to unforettable memories and live unique experience."
              }
              <br />
              {"Don't miss any announcement, be the first to know!"}
            </p>
            <a
              href={"https://discord.gg/eF2Ptw6MVM"}
              target={"_blank"}
              rel="noreferrer"
            >
              {"Join Discord"}
            </a>
          </MicrocosmLeft>
          <MicrocosmRight
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <img src={content} alt={"content"} />
            <h3>{"Explore the Microcosm"}</h3>
            <ActionGroup>
              <a
                href={"https://twitter.com/pacifiquehumans"}
                target={"_blank"}
                rel="noreferrer"
              >
                <SiTwitter />
              </a>
              <a
                href={"https://instagram.com/pacifique_av"}
                target={"_blank"}
                rel="noreferrer"
              >
                <SiInstagram />
              </a>
              <a
                href={"https://discord.gg/eF2Ptw6MVM"}
                target={"_blank"}
                rel="noreferrer"
              >
                <SiDiscord />
              </a>
              <a
                href={"https://pacifiqueav.medium.com/"}
                target={"_blank"}
                rel="noreferrer"
              >
                <SiMedium />
              </a>
            </ActionGroup>
          </MicrocosmRight>
        </MicrocosmContent>
      </MicrocosmContainer>
    </Section>
  );
};

export default Microcosm;
