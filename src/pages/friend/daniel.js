import React from "react";
// @import components
import FriendSection from "../../components/friend-section";
// @import resources
import daniel from "../../assets/images/daniel.svg";

const Daniel = () => {
  return (
    <FriendSection image={daniel}>
      <b>{"Daniel Mkongo | Founder & Creative Director"}</b>
      <p>
        {
          "Attached to his family and roots, Daniel has a past full of experiences, he’s very passionate and enthusiastic."
        }
        <br />
        {
          "His career began in 2008 and since then he always worked hard to voice his vision. Always in constant research and in step with the times, he want to combine experience and authenticity. "
        }
        <br />
        {
          "‘’Believe in what you are and in what you have, you can be everything you want.’’"
        }
      </p>
    </FriendSection>
  );
};

export default Daniel;
