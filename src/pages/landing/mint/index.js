import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import Section from "../../../components/common/section";
// @import styles
import {
  ConnectWallet,
  MintContainer,
  MintContent,
  MintLeft,
  MintRight,
  MintOrder,
  MintOrderAction,
  MintSwiper,
  MintSwipers,
} from "./mint.styled";

const Mint = () => {
  const [order, setOrder] = useState(0);
  const swiperRef = React.useRef(null);

  return (
    <Section paddingTop={"0"}>
      <MintContainer>
        <MintLeft
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <MintSwipers ref={swiperRef} touchRatio={0}>
            <SwiperSlide>
              <MintSwiper>{"1"}</MintSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <MintSwiper>{"2"}</MintSwiper>
            </SwiperSlide>
            <SwiperSlide>
              <MintSwiper>{"3"}</MintSwiper>
            </SwiperSlide>
          </MintSwipers>
          <MintOrderAction>
            <MintOrder
              onClick={() => {
                swiperRef.current.swiper.slidePrev();
                setOrder(swiperRef.current.swiper.activeIndex);
              }}
            >
              {"<"}
            </MintOrder>
            {order + 1}
            {" / 3"}
            <MintOrder
              onClick={() => {
                swiperRef.current.swiper.slideNext();
                setOrder(swiperRef.current.swiper.activeIndex);
              }}
            >
              {">"}
            </MintOrder>
          </MintOrderAction>
        </MintLeft>
        <MintRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          {order === 0 && (
            <MintContent>
              <h3>{"11|Rarest"}</h3>
              <ul>
                <li>{"3 free night stays per year at our locations"}</li>
                <li>{"Specific rates for members only"}</li>
                <li>{"Selected and exclusive accommodations"}</li>
                <li>{"Reservations will always include breakfast"}</li>
                <li>{"Early access to our locations, drops and events"}</li>
                <li>{"VIP treatments and outstanding discounts"}</li>
                <li>{"Pacifique Priority Pass | PPP"}</li>
              </ul>
              <p>{"More to come; under promise and over deliver!"}</p>
              <b>{"Mint price | 0.3 eth"}</b>
            </MintContent>
          )}
          {order === 1 && (
            <MintContent>
              <h3>{"100 | FLOWERS"}</h3>
              <ul>
                <li>{"1 free night stays per year at our locations"}</li>
                <li>{"Specific rates for members only"}</li>
                <li>{"Selected and exclusive accommodations"}</li>
                <li>{"Reservations will always include breakfast"}</li>
                <li>{"Early access to our locations, drops and events"}</li>
                <li>{"VIP treatments and outstanding discounts"}</li>
                <li>{"Pacifique Priority Pass | PPP"}</li>
              </ul>
              <p>{"More to come; under promise and over deliver!"}</p>
              <b>{"Mint price | 0.3 eth"}</b>
            </MintContent>
          )}
          {order === 2 && (
            <MintContent>
              <h3>{"1’000 | HUMANS"}</h3>
              <ul>
                <li>{" 1 free lunch at one of our locations"}</li>
                <li>{"Reservations will always include breakfast"}</li>
                <li>{"Access to our drops and events"}</li>
                <li>{"VIP treatments and outstanding discounts"}</li>
              </ul>
              <p>{"More to come; under promise and over deliver!"}</p>
              <b>{"Mint price | 0.3 eth"}</b>
            </MintContent>
          )}
          <ConnectWallet to={"/mint/" + order}>
            {"Connect Wallet"}
          </ConnectWallet>
        </MintRight>
      </MintContainer>
    </Section>
  );
};

export default Mint;
