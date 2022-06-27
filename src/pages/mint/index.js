import React from "react";
import { toast } from "react-toastify";
// @import layouts
import { MintLayout } from "../../layouts";
// @import resources
import hand from "../../assets/images/hand.png";
import { useEthContext } from "../../contexts/EthereumContext";
// @import styles
import {
  ConnectWallet,
  MintFormAmount,
  MintFormContainer,
  MintFormContent,
  MintFormData,
  MintFormDisplay,
  MintFormHand,
  MintFormMain,
  MintFormPrice,
} from "./mint.styled";

const MintForm = () => {
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
    <MintLayout>
      <MintFormContainer>
        <MintFormDisplay>{"0 / 1'111"}</MintFormDisplay>
        <MintFormContent>
          <MintFormMain>
            <MintFormHand src={hand} alt={"hand"} />
            <MintFormData>
              <MintFormPrice>
                {"PRICE | "}
                {"0.3 ETH"}
              </MintFormPrice>
              <MintFormAmount>
                <p>{"Quantity"}</p>
                <select>
                  <option>{"1"}</option>
                  <option>{"2"}</option>
                </select>
              </MintFormAmount>
              <ConnectWallet onClick={handleConnectWallet}>
                {currentAcc ? "Mint" : "Connect Wallet"}
              </ConnectWallet>
            </MintFormData>
          </MintFormMain>
        </MintFormContent>
      </MintFormContainer>
    </MintLayout>
  );
};

export default MintForm;
