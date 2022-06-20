import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import artisans from "../../assets/images/artisans.svg";

const Artisans = () => {
  return (
    <IntroSection
      image={artisans}
      title={"artisans"}
      subtitle={"Handmade by local"}
      link={""}
      action={"Coming Soon"}
    >
      <h3>{"BOUTIQUE"}</h3>
      <p>
        {
          "Pacifique AV is an ode to sensations. Our products only act as a medium through which to express this lifestyle. All of these stunning pieces are handmade by local artisans with sustainable materials to ensure that our creations bring nothing but goodness to all that they touch."
        }
        <br />
        <br />
        {
          "It's all about feelings and memories. Our products are designed and created for Humans in constant research of an innovative and an authentic experience."
        }
        <br />
        <br />
        {
          "We only craft limited series in an effort to keep our products as original and unique as possible. So have a look through our physical locations or online store to find something that suits your taste."
        }
        <br />
        <br />
        {
          "A space where ethical brands and artists can also show their collections."
        }
        <br />
        <br />
        {"IT’S NOT ABOUT PRODUCTS. IT’S ABOUT FEELINGS."}
      </p>
    </IntroSection>
  );
};

export default Artisans;
