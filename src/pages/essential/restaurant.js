import React from "react";
// @import components
import IntroSection from "../../components/intro-section";
// @import resources
import menu from "../../assets/images/menu.svg";

const Menu = () => {
  return (
    <IntroSection
      image={menu}
      title={"menu"}
      subtitle={"Take a look at the"}
      link={"#"}
      action={"Coming Soon"}
    >
      <h3>{"RESTAURANT & BAR"}</h3>
      <p>
        {
          "At Pacifique AV restaurants we want to offer a culinary experience. With our Field to Table restaurants we will reinterpret traditions by bringing to the table the scent and taste of ingredients grown by us."
        }
        <br />
        <br />
        {
          "Through a culinary journey, a mix of fusion and crossover cultures, we will awaken your senses. Our bar will be stocked with a selection of wines, beers, whiskeys, rums and tequilas. As well as fresh fruit smoothies and our inevitable infusions."
        }
        <br />
        <br />
        {
          "Bar and restaurant blend perfectly from early morning until late at night to satisfy you and relaxing you. All accompanied by our musical selection."
        }
        <br />
        {"All day dining."}
        <br />
        <br />
        {
          "Our restaurants are zero waste, food scraps will be used as vegetable fertilizer in our Farm."
        }
      </p>
    </IntroSection>
  );
};

export default Menu;
