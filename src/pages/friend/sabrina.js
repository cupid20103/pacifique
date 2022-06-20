import React from "react";
// @import components
import FriendSection from "../../components/friend-section";
// @import resources
import sabrina from "../../assets/images/sabrina.svg";

const Sabrina = () => {
  return (
    <FriendSection image={sabrina}>
      <b>{"Sabrina Trione | Co-Owner & Art Director"}</b>
      <br />
      <br />
      <p>
        {"Creative Human and fashion lover."}
        <br />
        <br />
        {
          "Since 2015 Sabrina as accompanied customers in achieving their goals and helping them recreate a successful image, arousing an emotion."
        }
        <br />
        {
          "She also worked for Guess, Off-white, Versace, Aname, VF and other emerging brands."
        }
        <br />
        {
          "She appreciate all forms of art and she’s a truly lover of life. Pure soul."
        }
      </p>
    </FriendSection>
  );
};

export default Sabrina;
