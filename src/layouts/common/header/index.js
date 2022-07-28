import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import city from "../../../assets/images/city.jpg";
import { contacts } from "../../data";
import {
  HeaderAction,
  HeaderCircle,
  HeaderClose,
  HeaderColor,
  HeaderContainer,
  HeaderMenu,
  HeaderWrapper,
  MenuActions,
  MenuContactActions,
  MenuImage,
  MenuPageActions,
} from "./header.styled";

const Header = ({ title, renderLinks }) => {
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
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderColor isOpened={isOpened} nav={nav} />
        {title}
        {!isOpened ? (
          <HeaderAction onClick={handleMenuToggle}>
            <HeaderCircle />
            <p>{"Menu"}</p>
          </HeaderAction>
        ) : (
          <HeaderClose onClick={handleMenuToggle}>
            <FaTimes />
            <p>{"Close"}</p>
          </HeaderClose>
        )}
        <HeaderMenu isOpened={isOpened}>
          <MenuActions>
            <MenuPageActions id="menu-page">
              {renderLinks(handleMenuToggle)}
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
              <a href={"mailto:hello@pacifiqueav.com"}>{"Contact"}</a>
            </MenuContactActions>
          </MenuActions>
          <MenuImage id="menu-img" src={city} alt={"city"} />
        </HeaderMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
