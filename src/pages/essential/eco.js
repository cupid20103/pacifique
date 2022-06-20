import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import stay from "../../assets/images/stay.svg";

const Stay = () => {
  return (
    <IntroSection
      image={stay}
      title={"stay"}
      subtitle={"Book your"}
      link={""}
      action={"Coming Soon"}
    >
      <h3>{"LUXURY ECO DOMES"}</h3>
      <p>
        {
          "11 accommodations will be available for a solo, couple or group trip."
        }
        <br />
        <br />
        {
          "The staff will always be at your complete disposal to make you live an unforgettable experience."
        }
        <br />
        <br />
        {
          "Every accommodation will have a unique and personal soul, with a minimal, sustainable and impactful design. Maximum comfort and attention to details."
        }
        <br />
        <br />
        {"Feel at home and in total privacy"}
      </p>
    </IntroSection>
  );
};

export default Stay;
