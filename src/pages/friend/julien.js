import React from "react";
// @import components
import FriendSection from "../../components/friend-section";
// @import resources
import julien from "../../assets/images/julien.svg";

const Julien = () => {
  return (
    <FriendSection image={julien}>
      <b>{"Julien Vecchioli-Barduzzi | Partner - Hospitality, F&B"}</b>
      <br />
      <br />
      <p>
        {
          "Julien began his career with the Yannick Alleno group, during 7 years he traveled the world to open new restaurants of the Group and taking care of the existing ones."
        }
        <br />
        {
          "He has explored the hospitality industry from the Inside with major players such as Mandarin Oriental, Cheval Blanc or Shangri-La. From Courchevel to Beijing, with stops in Paris, Dubai and Marrakech, Julien built his experience while living in different countries and cultures. "
        }
        <br />
        {
          "In 2021 Julien has joined Aware Hospitality as partner, an international project management and concept creation studio with activity over 4 continents counting as clients the Accor group, Ennismore, Oakley Capital and Loulou."
        }
      </p>
    </FriendSection>
  );
};

export default Julien;
