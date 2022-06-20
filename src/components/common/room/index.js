import React from "react";
// @import styles
import { RoomContainer, RoomText } from "./room.styled";

const Room = (props) => {
  return (
    <RoomContainer
      data-aos="fade-up"
      data-aos-duration={"1700"}
      className="aos-init aos-animate"
    >
      <img src={props.image} alt={"room"} />
      <RoomText>
        <b>{props.subtitle}</b>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </RoomText>
    </RoomContainer>
  );
};

export default Room;
