import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScroll } from "../useScroll";
import { navAnimations } from "../../animations";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  const html = document.querySelector("html");
  html.addEventListener("click", () => setIsNavOpen(false));

  return (
    <Nav
      ref={element}
      animate={controls}
      variants={navAnimations}
      transition={{ delay: 0.1 }}
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a href="#" className="brand">STUDYHARY</a>
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
  padding-top: 2rem;
  margin: 0 12rem;
  color: white;

  .brand__container {
    margin: 0 2rem;
    .brand {
      font-size: 22px;
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.5rem;
      border-bottom: 0.3rem solid #fff;
      color: #fff;
    }
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
          font-weight: bold;
        }
      }

      li {
        a {
          color: white;
          text-decoration: none;
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
      opacity: 0;
      height: 100vh;
      background-color: var(--secondary-color);
      visibility: hidden;
      transition: 0.4s ease-in-out;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
        li {
          a {
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default Navbar;
