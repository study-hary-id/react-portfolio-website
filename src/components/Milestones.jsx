import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScroll } from "./useScroll";
import { milestonesAnimations } from "../animations";

import milestone1 from "../assets/images/milestone1.png";
import milestone2 from "../assets/images/milestone2.png";
import milestone3 from "../assets/images/milestone3.png";
import milestoneBackground from "../assets/images/milestone-background.png";

function Milestones() {
  const [element, controls] = useScroll();

  const milestones = [
    {
      image: milestone1,
      data: "Clients Served",
      amount: 407
    },
    {
      image: milestone2,
      data: "of raw data",
      amount: 107
    },
    {
      image: milestone3,
      data: "recommendations",
      amount: 235
    }
  ];

  return (
    <Section ref={element}>
      <div className="background">
        <img src={milestoneBackground} alt="milestone background" />
      </div>
      <div className="milestones">
        {
          milestones.map(({ image, data, amount }) => {
            return (
              <motion.div
                className="milestone"
                animate={controls}
                variants={milestonesAnimations}
                transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
              >
                <p>{amount}</p>
                <span>{data}</span>
                <img src={image} alt="milestone" />
              </motion.div>
            );
          })
        }
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 100vh;
  background-color: var(--primary-color);
  padding-left: 0 10rem;
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    left: 0;
    bottom: -30%;

    img {
      height: 43rem;
      z-index: 2;
    }
  }

  .milestones {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: white;
    align-items: center;
    height: 100%;

    .milestone {
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      p {
        font-size: 5rem;
        font-weight: bolder;
        line-height: 3rem;
      }
      span {
        text-transform: uppercase;
        color: #ffffffc7;
      }
      img {
        height: 6rem;
      }
    }
  }
`;

export default Milestones;
