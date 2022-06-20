import React from "react";
// @import components
import Section from "../common/section";
// @import resources
import friend from "../../assets/images/friend.png";
// @import layouts
import { AppLayout } from "../../layouts";
// @import styles
import { FriendContainer, FriendLeft, FriendRight } from "./friend.styled";

const FriendSection = (props) => {
  return (
    <AppLayout>
      <Section image={friend}>
        <FriendContainer>
          <FriendLeft
            data-aos="fade-up"
            data-aos-duration={"1000"}
            className="aos-init aos-animate"
          >
            <img src={props.image} alt={"friend"} />
          </FriendLeft>
          <FriendRight
            data-aos="fade-up"
            data-aos-duration={"1000"}
            className="aos-init aos-animate"
          >
            <b>{"Meet our Team"}</b>
            <h3>{"Your Friends"}</h3>
            {props.children}
          </FriendRight>
        </FriendContainer>
      </Section>
    </AppLayout>
  );
};

export default FriendSection;
