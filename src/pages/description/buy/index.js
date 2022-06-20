import React from "react";
// @import layouts
import { AppLayout } from "../../../layouts";
// @import components
import Description from "../../../components/description-section";
// @import styles
import { BuyContainer, BuyLeft, BuyRight } from "./buy.styled";

const Value = () => {
  return (
    <AppLayout>
      <Description title={"How to buy"}>
        <BuyContainer>
          <BuyLeft>
            <p>
              <b>{"What is an NFT?"}</b>
              <br />
              {
                "A non-fungible token is a unique digital asset stored on a digital ledger. NFTs are using blockchain technology to establish a verified and public proof of ownership. In order to purchase NFTs, you will need to have a wallet."
              }
            </p>
            <p>
              <b>{"What is a wallet?"}</b>
              <br />
              {
                "The digital wallet allows users to manage, use and trade their cryptocurrencies, while also serving as a storage and management tool for your NFTs. The most popular wallet to use and one of the easiest to set up is MetaMask. MetaMask is also one of the most compatible wallets for NFT projects and exchanges alike."
              }
            </p>
            <p>
              <b>{"Setting up your MetaMask wallet"}</b>
              <br />
              {"Install MetaMask extension on your browser - "}
              <a
                href={"https://metamask.io/download.html"}
                target={"_blank"}
                rel="noreferrer"
              >
                {"https://metamask.io/download.html"}
              </a>
            </p>
            <p>
              {
                "1. A new window will open once installed, and you will have to follow the instructions to ‘create a new wallet’."
              }
              <br />
              {
                "2. Your ‘Secret Recovery Phrase’ will be generated. It is of extreme importance that you take this down somewhere and guard it with your life. Never give it nor show it to anybody."
              }
              <br />
              {
                "3. Once done, your wallet is set up and you will be able to access it from the MetaMask icon in your browser"
              }
            </p>
            <p>
              {
                "There are two main ways to fund your MetaMask wallet, both methods of which will be shared below"
              }
            </p>
          </BuyLeft>
          <BuyRight>
            <p>
              <b>{"Purchasing cryptocurrency in MetaMask"}</b>
              <br />
              {
                "1. Open your MetaMask wallet by clicking the extension icon in your browser."
              }
              <br />
              {
                "2. Click ‘Buy’ and you will be presented with 2 options, two of which involve purchasing cryptocurrency in MetaMask: Buy ETH with Wyre - this allows you to use a debit card to complete the purchase of ETH. Buy ETH with Transak - this allows you to use a debit card or bank transfer to complete the purchase of ETH."
              }
              <br />
              {
                "3. Once done, check your transaction history for a proof of purchase, and if successful, the ETH will appear in your wallet shortly. As these are third-party tools MetaMask charges a premium for purchasing ETH via the above two options."
              }
            </p>
            <p>
              <b>
                {"Sending cryptocurrency into your wallet from an exchange"}
              </b>
              <br />
              {
                "1. By purchasing cryptocurrencies on an exchange such as Coinbase or Binance, you are able to send the supported currency to your MetaMask wallet."
              }
              <br />
              {
                "2. On your cryptocurrency exchange’s interface, there will be an option for you to ‘send’ cryptocurrency."
              }
              <br />
              {
                "3. Click ‘send’, select the cryptocurrency you wish to transfer and enter your MetaMask address into the ‘To’ field."
              }
              <br />
              {
                "4. You are able to copy and paste your address from the MetaMask extension at the click of a button."
              }
              <br />
              {
                "5. When sending cryptocurrency into your MetaMask wallet, users are required to pay a certain gas fee, which is the IRL equivalent of a transaction fee/shipping fee purchasing ETH via the above two options."
              }
            </p>
          </BuyRight>
        </BuyContainer>
      </Description>
    </AppLayout>
  );
};

export default Value;
