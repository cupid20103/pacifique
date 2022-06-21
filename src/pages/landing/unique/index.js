import React from "react";
import Section from "../../../components/common/section";
// @import resources
import hand from "../../../assets/images/hand.svg";
import num from "../../../assets/images/1111.svg";
import unique from "../../../assets/images/unique.png";
// @import styles
import {
  ConnectWallet,
  UniqueContent,
  UniqueFormContainer,
  UniqueFormContent,
  UniqueFormData,
  UniqueFormDisplay,
  UniqueFormHand,
  UniqueFormMain,
} from "./unique.styled";

const Unique = () => {
  return (
    <Section paddingTop={"0"} image={unique}>
      <UniqueFormContainer>
        <UniqueFormDisplay>
          <img src={num} alt={"1111"} />
        </UniqueFormDisplay>
        <UniqueFormContent>
          <UniqueFormMain
            data-aos="fade-up"
            data-aos-duration={"1500"}
            className="aos-init aos-animate"
          >
            <UniqueContent>
              <h3>{"UNIQUE NFT’s"}</h3>
              <p>
                {"Hand drawn by Sabrina Trione ― Soul & C/O of Pacifique AV"}
              </p>
              <b>{"MINTED RANDOMLY"}</b>
            </UniqueContent>
            <UniqueFormHand src={hand} alt={"hand"} />
            <UniqueFormData>
              <ConnectWallet to={"/mint"}>{"Connect Wallet"}</ConnectWallet>
            </UniqueFormData>
          </UniqueFormMain>
        </UniqueFormContent>
      </UniqueFormContainer>
    </Section>
  );
};

export default Unique;
