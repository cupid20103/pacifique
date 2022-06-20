import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import cultures from "../../assets/images/cultures.svg";

const Cultures = () => {
  return (
    <IntroSection
      image={cultures}
      title={"cultures"}
      subtitle={"Discover new"}
      link={""}
      action={"Coming Soon"}
    >
      <b>{"Enjoy a wide range of"}</b>
      <h3>{"ADVENTURES"}</h3>
      <p>
        {
          "Pacifique is not only relaxation and well-being, but also culture, knowledge, sport and sharing. Selected for you, the best hidden corners, frequented by locals, and the best activities available in the area."
        }
        <br />
        <br />
        {
          "With our private activities, you will be immersed in the true culture and tradition of the place, accompanied by the Pacifique vision and experience."
        }
      </p>
    </IntroSection>
  );
};

export default Cultures;
