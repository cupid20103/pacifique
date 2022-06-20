import React from "react";
// @import components
import Section from "../../../components/common/section";
import Action from "../../../components/common/action";
// @import resources
import faq from "../../../assets/images/faq.png";
import Symbol from "../../../assets/images/symbol.svg";
// @import styles
import { FAQContainer, FAQLeft, FAQRight } from "./faq.styled";

const FAQ = () => {
  return (
    <Section id={"faq"} color="#5A5B44" image={faq} paddingTop={"0"}>
      <FAQContainer>
        <FAQLeft
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <img src={Symbol} alt={"symbol"} />
        </FAQLeft>
        <FAQRight
          data-aos="fade-up"
          data-aos-duration={"1500"}
          className="aos-init aos-animate"
        >
          <h3>{"FAQ"}</h3>
          <p>
            {"What is an NFT?"}
            <br />
            {"What is a wallet?"}
            <br />
            {"What’s the mint price?"}
            <br />
            {"Can I mint more than one token?"}
            <br />
            {"Do you offer lifetime membership?"}
            <br />
            {"Do all tokens come with the same utilities?"}
            <br />
            {"Can a family member use the token?"}
            <br />
            {
              "Can I gift or make a reservation for someone else to enjoy the token advantages?"
            }
            <br />
            {
              "How many yearly reservations can I make as a Pacifique token holder?"
            }
            <br />
            {"Can I lease my token to someone else if I can't use it? How?"}
            <br />
            {
              "Can I sell my token if I don't want to be a member anymore? If so, how?"
            }
            <br />
            {
              "Are there fees associated with the transaction if I sell my token?"
            }
          </p>
          <Action link={"/faq"} content={"Read More"} faq />
        </FAQRight>
      </FAQContainer>
    </Section>
  );
};

export default FAQ;
