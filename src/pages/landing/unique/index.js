import React from "react";
import { toast } from "react-toastify";
import Section from "../../../components/common/section";
// @import resources
import hand from "../../../assets/images/hand.svg";
import num from "../../../assets/images/1111.svg";
import { useEthContext } from "../../../contexts/EthereumContext";
// @import styles
import {
  ConnectWallet,
  UniqueFormContainer,
  UniqueFormContent,
  UniqueFormData,
  UniqueFormDisplay,
  UniqueFormHand,
  UniqueFormMain,
} from "./unique.styled";
import { UniqueContent } from "./unique.styled";

const Unique = () => {
  const { provider, currentAcc } = useEthContext();

  const handleConnectWallet = async () => {
    if (provider) {
      if (Number(window.ethereum.chainId) !== 1) {
        toast.error("Please connect to Ethereum Mainnet", {
          theme: "dark",
        });
      } else {
        await provider.request({ method: `eth_requestAccounts` });
      }
    } else {
      toast.error("Please install Metamask wallet in this browser", {
        theme: "dark",
      });
    }
  };

  return (
    <Section paddingTop={"0"}>
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
              <ConnectWallet onClick={handleConnectWallet}>
                {currentAcc
                  ? `${currentAcc.substring(0, 6)}...${currentAcc.substring(
                      38
                    )}`
                  : "Connect Wallet"}
              </ConnectWallet>
            </UniqueFormData>
          </UniqueFormMain>
        </UniqueFormContent>
      </UniqueFormContainer>
    </Section>
  );
};

export default Unique;
