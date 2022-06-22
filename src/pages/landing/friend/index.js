import React from "react";
// @import components
import Section from "../../../components/common/section";
import Team from "../../../components/common/team";
// @import resources
import { data } from "./data";
// @import styles
import { FriendContainer, FriendTitle, FrinedContent } from "./friend.styled";

const Friend = () => {
  return (
    <Section>
      <FriendContainer>
        <FriendTitle
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <b>{"Meet our Team"}</b>
          <h3>{"Your Friends"}</h3>
        </FriendTitle>
        <FrinedContent>
          {data.map((item, index) => (
            <Team
              key={index}
              avatar={item.avatar}
              title={item.title}
              role={item.role}
              intro={item.intro}
              career={item.career}
              join={item.join}
              twitter={item.twitter}
              instagram={item.instagram}
              linkedin={item.linkedin}
            />
          ))}
        </FrinedContent>
      </FriendContainer>
    </Section>
  );
};

export default Friend;
