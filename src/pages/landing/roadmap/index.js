import React, { useState, useEffect } from "react";
// @import components
import Section from "../../../components/common/section";
// @import resources
import eye from "../../../assets/images/eye.svg";
import { isScreenWidth } from "../../../utils/isScreenWidth";
// @import styles
import {
  RoadmapContainer,
  RoadmapFooter,
  RoadmapLeft,
  RoadmapLeftContent,
  RoadmapRight,
  RoadmapRightContent,
  RoadmapStep1,
  RoadmapStep2,
  RoadmapSteps,
} from "./roadmap.styled";

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
  }, []);

  return (
    <Section color="#5A5B44" height={isMobile ? "700px" : "4400px"}>
      <RoadmapContainer>
        <RoadmapLeft isMobile={isMobile}>
          <RoadmapLeftContent
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
            isMobile={isMobile}
          >
            <h3>{"Roadmap"}</h3>
            <p>
              {
                "The biggest goal is to build our first Eco Retreat, but in between we want to let you feel the energies and vibes of what it will come."
              }
              <br />
              <br />
              {"Under promise. Over deliver."}
            </p>
            <img src={eye} alt={"eye"} />
          </RoadmapLeftContent>
        </RoadmapLeft>
        <RoadmapRight isMobile={isMobile}>
          <RoadmapRightContent isMobile={isMobile}>
            <RoadmapSteps>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "500"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q2 - 2022"}</b>
                <p>{"Twitter Launch"}</p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "800"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q2 - 2022"}</b>
                <p>{"Discord Launch"}</p>
              </RoadmapStep2>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "1100"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q2 - 2022"}</b>
                <p>
                  {
                    "Private sale to investor, partners, contributors, friends and loyal members that helped us along the way."
                  }
                  <br />
                  {"Public launch"}
                </p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "1300"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q2 - 2022"}</b>
                <p>{"Launch Party with different guests"}</p>
              </RoadmapStep2>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1350"}
                data-aos-offset={isMobile ? "120" : "1550"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q3 - 2022"}</b>
                <p>{"First drop"}</p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "1850"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q3 - 2022"}</b>
                <p>
                  {"Pop Up Experience"}
                  <br />
                  {"Details to follow soon"}
                </p>
              </RoadmapStep2>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "2150"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q3 - 2022"}</b>
                <p>{"Identify and secure real-estate in Marrakech"}</p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "2450"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Late Q3 - 2022"}</b>
                <p>
                  {
                    "Private Exhibition exclusively for PHC members. Details to follow soon"
                  }
                </p>
              </RoadmapStep2>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "2750"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q4 - 2022"}</b>
                <p>{"Second drop"}</p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "3000"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"December 2022"}</b>
                <p>
                  {
                    "Pop Up Experience. Talking future with the team, Food, Music, Art, Fashion and culture"
                  }
                </p>
              </RoadmapStep2>
              <RoadmapStep1
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "3300"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"New Year's Eve 2022"}</b>
                <p>{"Exclusive travel experience with lucky members"}</p>
              </RoadmapStep1>
              <RoadmapStep2
                data-aos="fade-up"
                data-aos-duration={"1200"}
                data-aos-offset={isMobile ? "120" : "3650"}
                data-aos-easing={"ease-in-sine"}
                className="aos-init aos-animate"
              >
                <b>{"Q3/Q4 - 2023"}</b>
                <p>
                  {
                    "First Pacifique AV Eco Retreat opens the door to our members"
                  }
                </p>
              </RoadmapStep2>
            </RoadmapSteps>
            <RoadmapFooter>{"It’s just the beginning "}</RoadmapFooter>
          </RoadmapRightContent>
        </RoadmapRight>
      </RoadmapContainer>
    </Section>
  );
};

export default Roadmap;
