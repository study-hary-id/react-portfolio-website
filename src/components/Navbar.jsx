import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScroll } from "./useScroll";
import { navAnimations } from "../animations";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));

  return (
    <Nav
      ref={element}
      variants={navAnimations}
      transition={{ delay: 0.1 }}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle">
          {isNavOpen ? 
            <MdClose onClick={() => setIsNavOpen(false)} /> :
            <GiHamburgerMenu onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }} />}
        </div>
      </div>

      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  padding-top: 2rem;
  color: white;

  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }

  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;

      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }

      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;

    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
