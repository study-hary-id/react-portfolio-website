import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Title from "./Title";
import { useScroll } from "./useScroll";
import { portfolioAnimations } from "../animations";

import loadmore from "../assets/images/loadmore.png";
import portfolio1 from "../assets/images/portfolio1.png";
import portfolio2 from "../assets/images/portfolio2.png";
import placeholder from "../assets/images/placeholder.png";

function Portfolio() {
  const [element, controls] = useScroll();

  return (
    <Section id="portfolio" ref={element}>
      <Title value="Portfolio" />
      <div className="background">
        <img src={portfolio1} alt="design" className="design1" />
        <img src={portfolio2} alt="design" className="design2" />
      </div>
      <div className="portfolio__title">
        <p>Our Works</p>
        <h2>Check out our super awesome portfolio</h2>
      </div>
      <div className="grid">
        <motion.div
          className="child-one grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-two grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-three grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-four grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-five grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-six grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-seven grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
        <motion.div
          className="child-eight grid-box"
          animate={controls}
          variants={portfolioAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <img src={placeholder} alt="placeholder" />
        </motion.div>
      </div>
      <div className="portfolio-more">
        <span>Load More</span>
        <img src={loadmore} alt="load more" />
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  background-color: var(--secondary-color);

  .background {
    position: relative;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 8%;
      top: 0;
    }
    .design2 {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 30rem;
      height: 40rem;
    }
  }

  .sideTitle {
    z-index: 2;
    h1 {
      color: white;
    }
  }

  .portfolio__title {
    margin: 6rem 15rem;
    p {
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }

  .grid {
    padding: 0 15rem;
    display: grid;
    grid-template-column: repeat(4, 1fr);
    grid-template-areas: 
      "one one two two"
      "one one three four"
      "five six seven seven"
      "eight six seven seven";
    .grid-box {
      height: 15rem;
      width: 100%;
      background-color: var(--primary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        transition: 0.4s ease-in-out;
      }
      &:hover {
        img {
          transform: scale(1.2);
        }
      }
      &:nth-of-type(1) {
        grid-area: one;
        height: 100%;
        background-color: #8860e66a;
        z-index: 10;
      }
      &:nth-of-type(2) {
        grid-area: two;
        z-index: 10;
        background-color: #662d91ca;
      }
      &:nth-of-type(3) {
        grid-area: three;
        background-color: #8860e6b0;
      }
      &:nth-of-type(4) {
        grid-area: four;
      }
      &:nth-of-type(5) {
        grid-area: five;
        z-index: 10;
        background-color: #8860e6b0;
      }
      &:nth-of-type(6) {
        grid-area: six;
        height: 100%;
        background-color: #662d91ca;
      }
      &:nth-of-type(7) {
        grid-area: seven;
        height: 100%;
        background-color: #8860e66a;
      }
      &:nth-of-type(8) {
        grid-area: eight;
        z-index: 10;
      }
    }
  }

  .portfolio-more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;
    gap: 1rem;
    span {
      color: white;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }

    .portfolio__title {
      margin: 0;
      padding: 0 2rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
      }
    }

    .grid {
      padding: 2rem 4rem;
      grid-template-columns: 1fr;
      grid-template-areas:
        "one"
        "two"
        "three"
        "four"
        "five"
        "six"
        "seven"
        "eight";
      .grid-box {
        height: 10rem !important;
      }
    }
  }
`;

export default Portfolio;
