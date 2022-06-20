import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import living from "../../assets/images/living.svg";

const Living = () => {
  return (
    <IntroSection
      image={living}
      title={"living"}
      subtitle={"Sustainable & Healthy"}
      link={""}
      action={"Coming Soon"}
    >
      <h3>{"THE FARM"}</h3>
      <p>
        {
          "There are no barriers between restaurant and nature, and for us it is not just a saying."
        }
        <br />
        <br />
        {
          "In an era where digitalization and robotics are taking over the nature, with our garden 'The Farm', we want to make our contribution and go back to the origins, feel the contact with the earth, and guarantee a 0 km product, natural and organic in our kitchen."
        }
        <br />
        <br />
        {
          "Members will be able to interact with the garden, through a private and personal plantation, sown by them, which they can enjoy whenever they comes visit us. Members will also be able to order the products they planted, together with those of the rest of the Farm, with weekly delivery."
        }
        <br />
        <br />
        {"The proceeds from The Farm will be donated to Fondation Pacifique."}
      </p>
    </IntroSection>
  );
};

export default Living;
