import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import { data } from "./data";
// @import styles
import {
  EssentialAction,
  EssentialContainer,
  EssentialContent,
  EssentialLeft,
  EssentialRight,
  EssentialSlider,
  HeaderImage,
  MoveAction,
  SlideText,
  SwiperContainer,
} from "./essential.styled";

const Essential = () => {
  const swiperRef = React.useRef(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

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
              ref={swiperRef}
              onSlideChange={(e) => {
                setSwiperIndex(e.activeIndex);
              }}
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
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <EssentialSlider to={item.link}>
                    <HeaderImage
                      isCurrent={index !== swiperIndex + 1}
                      src={item.image}
                      alt={"content"}
                    />
                    <SlideText isCurrent={index !== swiperIndex + 1}>
                      {item.title}
                    </SlideText>
                  </EssentialSlider>
                </SwiperSlide>
              ))}
            </SwiperContainer>
            <EssentialAction>
              <MoveAction
                className="prev"
                current={swiperIndex}
                onClick={() => {
                  swiperRef.current.swiper.slidePrev();
                  setSwiperIndex(swiperRef.current.swiper.activeIndex);
                }}
              />
              <MoveAction
                className="next"
                current={swiperIndex}
                onClick={() => {
                  swiperRef.current.swiper.slideNext();
                  setSwiperIndex(swiperRef.current.swiper.activeIndex);
                }}
              />
            </EssentialAction>
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
