import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScroll } from "./useScroll";
import { footerTextAnimations } from "../animations";

import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  const [element, controls] = useScroll();

  return (
    <Foot
      ref={element}
      animate={controls}
      variants={footerTextAnimations}
      transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
    >
      <span>&copy; Template created with love by Muhammad Haryansyah</span>
      <div className="footer__social__icons">
        <BsBehance />
        <BsFacebook />
        <BsTwitter />
        <BsYoutube />
      </div>
    </Foot>
  );
}

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5rem 10rem;

  .footer__social__icons {
    display: flex;
    gap: 2rem;

    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

export default Footer;
