import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// @import components
import Action from "../action";
// @import styles
import {
  TeamAvatar,
  TeamContainer,
  TeamContent,
  TeamInfo,
} from "./team.styled";

const Team = (props) => {
  return (
    <TeamContainer
      data-aos="flip-down"
      data-aos-duration={"1500"}
      className="aos-init aos-animate"
    >
      <TeamAvatar avatar={props.avatar} />
      <TeamContent>
        <p>
          {props.title}
          <br />
          {props.role}
        </p>
        <Action content={"Read More"} link={props.intro} />
        <TeamInfo>
          <a href={props.twitter} target={"_blank"} rel="noreferrer">
            <FaTwitter />
          </a>
          <a href={props.instagram} target={"_blank"} rel="noreferrer">
            <FaInstagram />
          </a>
          <a href={props.linkedin} target={"_blank"} rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </TeamInfo>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team;
