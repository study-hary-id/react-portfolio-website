import React, { useState } from "react";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { navAnimations } from "../animations";
import { motion } from "framer-motion";

import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import logo from "../assets/images/logo.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav
      ref={element}
      variants={navAnimations}
      transition={{ delay: 0.1 }}
      animate={controls}
    >
      <div className="brand__container">
        <a href="#" className="brand">
          <img src={logo} alt="logo" />
        </a>
        <div className="toggle"></div>
      </div>

      <div className="links">
        <ul>
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
`;

export default Navbar;
