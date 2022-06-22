import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// @import components
import Modal from "../modal";
// @import styles
import {
  TeamAction,
  TeamAvatar,
  TeamContainer,
  TeamContent,
  TeamInfo,
} from "./team.styled";

const Team = (props) => {
  const [show, setShow] = useState(false);

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
        <TeamAction onClick={() => setShow(true)}>{"Read More"}</TeamAction>
        <Modal
          show={show}
          title={props.title}
          role={props.role}
          intro={props.intro}
          career={props.career}
          join={props.join}
          onClose={() => setShow(false)}
        />
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
