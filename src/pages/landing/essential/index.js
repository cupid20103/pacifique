import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import { data } from "./data";
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
  return (
    <Section id={"boutique"} height={"700px"}>
      <EssentialContainer>
        <EssentialLeft>
          <EssentialContent
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <SwiperContainer
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                1440: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                425: {
                  slidesPerView: 2,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
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
