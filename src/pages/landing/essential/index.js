import React, { useState, useEffect } from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import { data } from "./data";
import { isScreenWidth } from "../../../utils/isScreenWidth";
// @import styles
import {
  EssentialContainer,
  EssentialContent,
  EssentialLeft,
  EssentialRight,
  EssentialSlider,
  FooterImage,
  HeaderImage,
  SwiperContainer,
} from "./essential.styled";
import { SwiperSlide } from "swiper/react";

const Essential = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(425));
    });
    setIsMobile(isScreenWidth(425));
  }, []);

  return (
    <Section id={"boutique"}>
      <EssentialContainer>
        <EssentialLeft>
          <EssentialContent
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <SwiperContainer
              slidesPerView={isMobile ? 1 : 3}
              spaceBetween={30}
              modules={[Pagination]}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <EssentialSlider to={item.link}>
                    <HeaderImage src={item.image1} alt={"content"} />
                    <p>{item.title}</p>
                    <FooterImage src={item.image2} alt={"draw"} />
                  </EssentialSlider>
                </SwiperSlide>
              ))}
            </SwiperContainer>
          </EssentialContent>
        </EssentialLeft>
        <EssentialRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>
            {"Get back to"}
            <br />
            {"ESSENTIAL"}
          </h3>
          <p>
            {
              "Connect with Humans from all around the world and give birth to unforgettable memories. Discover new cultures, new dimensions and feel new emotions and energies."
            }
          </p>
          <Action link={"#"} content={"Coming Soon"} />
        </EssentialRight>
      </EssentialContainer>
    </Section>
  );
};

export default Essential;
