import React from "react";
// @import layouts
import { AppLayout } from "../../../layouts";
// @import components
import Description from "../../../components/description-section";
// @import styles
import { AnswerContainer, AnswerLeft, AnswerRight } from "./answer.styled";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"FAQ’s - MEMBERSHIP"}>
        <AnswerContainer>
          <AnswerLeft>
            <p>
              <b>{"Is there an age requirement to be a token holder?"}</b>
              <br />
              {"Yes, all token holders must be at least 18 years of age."}
            </p>
            <p>
              <b>{"Can I mint more than one token?"}</b>
              <br />
              {
                "Yes, you can mint two token per transaction, if you’d like to purchase more tokens, you can repeat the process."
              }
            </p>
            <p>
              <b>{"Do you offer lifetime membership?"}</b>
              <br />
              {"Yes, we do offer lifetime membership to all token holders."}
            </p>
            <p>
              <b>{"Do all tokens come with the same utilities?"}</b>
              <br />
              {
                "Pacifique tokens come with the same utility. However 1/1 NFTs will have 5 free nights in a luxury villa + breakfast guarantee a year in one of our resorts of their choice, and other benefits to be announced."
              }
            </p>
            <p>
              <b>{"Can a family member use the token?"}</b>
              <br />
              {
                "Pacifique tokens come with the same utility. However 1/1 NFTs will have 5 free nights in a luxury villa + breakfast guarantee a year in one of our resorts of their choice, and other benefits to be announced."
              }
            </p>
            <p>
              <b>
                {
                  "Can I gift or make a reservation for someone else to enjoy the token advantages?"
                }
              </b>
              <br />
              {
                "Unfortunately, not. Each membership is tied to a token holder, and that individual must be present with their guests to enjoy the full experience."
              }
            </p>
          </AnswerLeft>
          <AnswerRight>
            <p>
              <b>
                {
                  "How many yearly reservations can I make as a Pacifique token holder?"
                }
              </b>
              <br />
              {
                "As a Pacifique token holder, you are entitled to make as many reservations as you'd like per year."
              }
            </p>
            <p>
              <b>
                {"Can I lease my token to someone else if I can't use it? How?"}
              </b>
              <br />
              {
                "Yes, you can lease your token for someone else to enjoy. We will implement a system on our website where you will be able to lease your token to a non-token holder. With a potential passive income, in addition to the potential appreciation of the token price due to the scarcity and demand. However, we encourage you to enjoy the journey, as our project is focused on giving utilities and exclusive experiences to our token holders."
              }
            </p>
            <p>
              <b>
                {
                  "Can I sell my token if I don't want to be a member anymore? If so, how?"
                }
              </b>
              <br />
              {
                "Yes, you can sell your token at any moment on the secondary market (i.e: "
              }
              <a
                href={"https://opensea.io/"}
                target={"_blank"}
                rel="noreferrer"
              >
                {"opensea.io"}
              </a>
            </p>
            <p>
              <b>
                {
                  "Are there fees associated with the transaction if I sell my token?"
                }
              </b>
              <br />
              {"Yes, all secondary sales on Opensea include:"}
              <li>{"2.5% to Opensea"}</li>
              <li>{"7.5% to Pacifique AV"}</li>
            </p>
            <p>
              <b>
                {"How can you guarantee a safe transaction during the mint?"}
              </b>
              <br />
              {
                "According to the Swiss law which will come into force from February 2023, and thanks to our Partner Validity Lab. We can guarantee a secure transaction by integrating a KYC & AML solution into our system. Our goal is to keep the space safe and clean."
              }
            </p>
          </AnswerRight>
        </AnswerContainer>
      </Description>
    </AppLayout>
  );
};

export default Value;
