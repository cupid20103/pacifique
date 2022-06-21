import React from "react";
// @import components
import FriendSection from "../../components/friend-section";
// @import resources
import alexandre from "../../assets/images/alexandre.svg";

const Alexandre = () => {
  return (
    <FriendSection image={alexandre}>
      <b>{"Alexandre Santamaria | Partner - Hospitality, F&B"}</b>
      <p>
        {
          "Alex started his career at the age of 20 as private to the French Ambassador in London. Rapidly moving up through the ranks, Alex held various management position within international luxury 5 star hotels in Paris, London and Beirut."
        }
        <br />
        {
          "Alex partly owned, developed and managed the Coya brand through to exit. He then joined the Hakkasan group, in 2017,  to hold a similar position."
        }
        <br />
        {
          "In 2019 Alex founded Aware Hospitality, an international project management and concept creation studio with activity over 4 continents counting as clients the Accor group, Ennismore, Oakley Capital and Loulou to name a few."
        }
      </p>
    </FriendSection>
  );
};

export default Alexandre;
