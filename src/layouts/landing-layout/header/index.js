import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
// @import resource
import city from "../../../assets/images/city.jpg";
import { contacts } from "./data";
import { useEthContext } from "../../../contexts/EthereumContext";
// @import styles
import {
  HeaderAction,
  HeaderCircle,
  HeaderClose,
  HeaderColor,
  HeaderContainer,
  HeaderMenu,
  HeaderOverlay,
  HeaderTitle,
  MenuActions,
  MenuContactActions,
  MenuImage,
  MenuPageActions,
  WallecConnect,
} from "./landingheader.styled";

const LandingHeader = () => {
  const { provider, currentAcc } = useEthContext();
  const [isOpened, setIsOpened] = useState(false);
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

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

  const handleMenuToggle = () => {
    const menuPage = document.getElementById("menu-page");
    const menuContact = document.getElementById("menu-contact");
    const menuImg = document.getElementById("menu-img");
    if (!isOpened) {
      setTimeout(() => {
        menuPage.classList.add("active-function");
        menuContact.classList.add("active-function");
        menuImg.classList.add("active-function");
      }, 2000);
    } else {
      menuPage.classList.remove("active-function");
      menuContact.classList.remove("active-function");
      menuImg.classList.remove("active-function");
    }
    setIsOpened((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderColor isOpened={isOpened} nav={nav} />
        {!isOpened ? (
          <HeaderAction onClick={handleMenuToggle}>
            <HeaderCircle />
            <p>{"Menu"}</p>
          </HeaderAction>
        ) : (
          <HeaderClose onClick={handleMenuToggle}>
            <FaTimes />
            {"Close"}
          </HeaderClose>
        )}
        <HeaderTitle to={"hero"} smooth={true} duration={1500}>
          {"Pacifique AV"}
        </HeaderTitle>
        <WallecConnect onClick={handleConnectWallet}>
          {currentAcc
            ? `${currentAcc.substring(0, 6)}...${currentAcc.substring(38)}`
            : "Connect Wallet"}
        </WallecConnect>
        <HeaderMenu isOpened={isOpened}>
          <MenuActions>
            <MenuPageActions id="menu-page">
              <Link
                to={"faq"}
                smooth={true}
                duration={1500}
                onClick={handleMenuToggle}
              >
                {"FAQ"}
              </Link>
              <Link
                to={"places"}
                smooth={true}
                duration={1500}
                onClick={handleMenuToggle}
              >
                {"Places"}
              </Link>
              <a
                href={"https://pacifiqueav.medium.com/"}
                target={"_blank"}
                rel="noreferrer"
              >
                {"JOURNAL"}
              </a>
              <Link
                to={"boutique"}
                smooth={true}
                duration={1500}
                onClick={handleMenuToggle}
              >
                {"Boutique"}
              </Link>
            </MenuPageActions>
            <MenuContactActions id="menu-contact">
              {contacts.map((item, index) => (
                <a
                  key={index}
                  href={item.to}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  {item.value}
                </a>
              ))}
            </MenuContactActions>
          </MenuActions>
          <MenuImage id="menu-img" src={city} alt={"city"} />
        </HeaderMenu>
      </HeaderContainer>
      <HeaderOverlay />
    </>
  );
};

export default LandingHeader;
