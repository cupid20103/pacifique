import React from "react";
// @import components
import Action from "../../../components/common/action";
import Section from "../../../components/common/section";
// @import resources
import membershipBG from "../../../assets/images/membership_bg.svg";
// @import styles
import {
  MemberActions,
  MemberContainer,
  MemberContent,
} from "./membership.styled";

const MemberShip = () => {
  return (
    <Section
      paddingTop={"0"}
      image={membershipBG}
      bgsize={"50% 100%"}
      bgpos={"right"}
    >
      <MemberContainer>
        <MemberContent
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>{"Your Membership becomes a digital asset"}</h3>
          <p>
            {
              "Pacifique Humans Club is your exclusive laidback club, where membership is purchased as a NFT on the blockchain. "
            }
            <br />
            <br />
            {
              "It’s time to skip those yearly payments for hotel memberships and replace them with a one-time buy-in you can trust. This pass gives you lifetime access to our Smart Luxury Eco Retreats and unique IRL experiences, via a digital asset that no hotel members club has ever used before."
            }
            <br />
            <br />
            {
              "Members will enjoy a selection of culinary and cultural experiences, free stays and unlimited access to our locations and services."
            }
            <br />
            <br />
            {
              "We plan on opening multiple locations around the world. The first one will be in 31°38′07″N 8°00′01″W"
            }
          </p>
          <MemberActions>
            <Action link={"/benefits"} content={"Membership Benefits"} />
            <Action link={"/nfts"} content={"Why NFTs?"} />
            <Action link={"/buy"} content={"How to Buy"} />
          </MemberActions>
        </MemberContent>
      </MemberContainer>
    </Section>
  );
};

export default MemberShip;
