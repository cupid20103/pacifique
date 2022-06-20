import React from "react";
// @import layouts
import { AppLayout } from "../../../layouts";
// @import components
import Description from "../../../components/description-section";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"Why NFTs?"}>
        <p>
          {
            "We want to create an incredible value for the pioneers that are going to take part in this journey, between web3 and the world of IRL luxury experiences."
          }
        </p>
        <p>
          {
            "As Non-Fungible-Tokens popularity has spread across the globe, we’ve immediately seen the incredible values that this assets can potentially bring to our community"
          }
        </p>
        <ul>
          <li>
            <p>
              {
                "Only 1’111 memberships available, which fits the NFT model of scarcity perfectly. Each NFT is hand drawn by Sabrina Trione, giving them a significant and emotional artistic value. Every piece of art is unique, born by a melting pot of the artist feelings and emotions, and our roots, our vision and beliefs. Not just a membership card, but something that will last forever. A real ‘’Oeuvre d’Art’’."
              }
            </p>
          </li>
          <li>
            <p>
              {
                "By choosing NFT’s we are able to turn your membership into a valuable asset that can be sold and leased, with a potential passive income engaged."
              }
            </p>
          </li>
          <li>
            <p>
              {
                "It also means that there will be no frustrating recurring hotel monthly membership fees or yearly applications."
              }
            </p>
          </li>
        </ul>
        <p>
          {
            "This modern financial system will allow us to build a loyal community that can benefits from our sustainable services and experiences for years to come!"
          }
        </p>
      </Description>
    </AppLayout>
  );
};

export default Value;
