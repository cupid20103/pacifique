import React from "react";
import { AppLayout } from "../../layouts/";
import Action from "../common/action";
import Section from "../common/section";
import {
  IntroContainer,
  IntroContent,
  IntroLeft,
  IntroRight,
  IntroWrapper,
} from "./intro.styled";

const IntroSection = (props) => {
  return (
    <AppLayout>
      <Section height={"100vh"}>
        <IntroWrapper>
          <IntroContainer>
            <IntroLeft>
              <IntroContent
                data-aos="fade-up"
                data-aos-duration={"1200"}
                className="aos-init aos-animate"
              >
                {props.children}
              </IntroContent>
            </IntroLeft>
            <IntroRight
              data-aos="fade-up"
              data-aos-duration={"1200"}
              className="aos-init aos-animate"
            >
              <img src={props.image} alt={"introduce"} />
              <b>{props.subtitle}</b>
              <h3>{props.title}</h3>
              <Action link={props.link} content={props.action} faq />
            </IntroRight>
          </IntroContainer>
        </IntroWrapper>
      </Section>
    </AppLayout>
  );
};

export default IntroSection;
