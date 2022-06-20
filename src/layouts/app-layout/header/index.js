import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
// @import resource
import city from "../../../assets/images/city.jpg";
import { contacts } from "./data";
// @import styles
import {
  HeaderAction,
  HeaderCircle,
  HeaderClose,
  HeaderColor,
  HeaderContainer,
  HeaderMenu,
  HeaderTitle,
  MenuActions,
  MenuContactActions,
  MenuImage,
  MenuPageActions,
} from "./appheader.styled";

const AppHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [nav, setNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 50) {
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
    <HeaderContainer>
      <HeaderColor isOpened={isOpened} nav={nav} />
      <HeaderTitle to={"/"}>{"Pacifique AV"}</HeaderTitle>
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
      <HeaderMenu isOpened={isOpened}>
        <MenuActions>
          <MenuPageActions id="menu-page">
            <Link to={"/"} onClick={handleMenuToggle}>
              {"FAQ"}
            </Link>
            <Link to={"/"} onClick={handleMenuToggle}>
              {"Places"}
            </Link>
            <a
              href={"https://pacifiqueav.medium.com/"}
              target={"_blank"}
              rel="noreferrer"
            >
              {"JOURNAL"}
            </a>
            <Link to={"/"} onClick={handleMenuToggle}>
              {"Boutique"}
            </Link>
          </MenuPageActions>
          <MenuContactActions id="menu-contact">
            {contacts.map((item, index) => (
              <a key={index} href={item.to} target={"_blank"} rel="noreferrer">
                {item.value}
              </a>
            ))}
          </MenuContactActions>
        </MenuActions>
        <MenuImage id="menu-img" src={city} alt={"city"} />
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default AppHeader;
