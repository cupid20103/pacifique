import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import spa from "../../assets/images/spa.svg";

const Spa = () => {
  return (
    <IntroSection
      image={spa}
      title={"private spa"}
      subtitle={"Book your"}
      link={"#"}
      action={"Coming Soon"}
    >
      <h3>{"HEALING & WELLNESS"}</h3>
      <p>
        {
          "A place of reconnection, reserved for those rare moments in which body, mind and soul reach harmony."
        }
        <br />
        <br />
        {
          "Yoga and meditation courses, Hammam and Moroccan style treatments will make you experience a feelings of total relaxation. Purify your body and mind with our natural products, which will regenerate your skin and your spirit."
        }
        <br />
        <br />
        {
          "For your daily physical activity, there will be a Personal Trainer available for the best tailored workout for you. Your well-being is our priority."
        }
      </p>
    </IntroSection>
  );
};

export default Spa;
