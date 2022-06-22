import React from "react";
// @import layouts
import { AppLayout } from "../../../layouts";
// @import components
import Description from "../../../components/description-section";
// @import resources
import benefit from "../../../assets/images/benefit.svg";
// @import styles
import { BenefitContainer, BenefitLeft, BenefitRight } from "./benefit.styled";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"MEMBERSHIP BENEFITS"} img={benefit}>
        <BenefitContainer>
          <BenefitLeft>
            <ul>
              <li>
                <p>
                  <b>{"3 free gorgeous night stays per years: "}</b>
                  {
                    "11 NFT holders will get three free nights per year in a luxury accommodation at one of our retreat of their choice. (Exd. F&B and extras)"
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"1 free gorgeous night stay per year: "}</b>
                  {
                    "100 NFT holders will get three free nights per year in a luxury accommodation at one of our retreat of their choice. (Exd. F&B and extras)"
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"100 nights available to the most loyal members: "}</b>
                  {
                    "Our most helpful and l loyal members will be rewarded with bonus nights in one of our retreat, as a sign of our appreciation for the value and love that they bring to the community."
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"Breakfast included: "}</b>
                  {"Members reservations will always include breakfast."}
                </p>
              </li>
              <li>
                <p>
                  <b>{"50% discounts: "}</b>
                  {
                    "Every member will benefit from a wide range of VIP treatments and 50% discounts on all our unforgettable experiences."
                  }
                </p>
              </li>
            </ul>
          </BenefitLeft>
          <BenefitRight>
            <ul>
              <li>
                <p>
                  <b>{"Exclusive access to private areas: "}</b>
                  {
                    "There's nothing better than disappearing into a private and cozy corner for a little rest and recovery."
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"Access to exclusive fascinating IRL events: "}</b>
                  {
                    "From parties and networking meet-ups to sprts games and art exhibitions, concerts, festivals and fashion weeks, we've got perfect activity for you."
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"Access to our concierge service: "}</b>
                  {
                    "From restaurants to hospitalities and travel experiences, humanitarian expeditions, activities personal shopper and more."
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"Exclusive drops: "}</b>
                  {
                    "Get access to our numbered and handmade products, made with love by our artisans as well in collaboration with other talented artists. Some of them are clothing furniture & home goods, art, carpets and fragrances."
                  }
                </p>
              </li>
              <li>
                <p>
                  <b>{"Right to vate: "}</b>
                  {
                    "Your input is vital to this team - teat's why all NFT members will have the right to vote on the community treasury decisions."
                  }
                </p>
              </li>
            </ul>
          </BenefitRight>
        </BenefitContainer>
      </Description>
    </AppLayout>
  );
};

export default Value;
