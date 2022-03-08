import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Title from "./Title";
import { useScroll } from "./useScroll";
import { skillsBarAnimations } from "../animations";

import skill1 from "../assets/images/skill1.png";
import skill2 from "../assets/images/skill2.png";

function Skills() {
  const [element, controls] = useScroll();

  const skillsData = [
    {
      name: "Creativity", amount: 75
    },
    {
      name: "Coding", amount: 75
    },
    {
      name: "React", amount: 55
    },
    {
      name: "Design", amount: 35
    }
  ];

  return (
    <Section id="skills" ref={element}>
      <Title value="skills" />
      <div className="background">
        <img src={skill1} alt="skill" className="design1" />
        <img src={skill2} alt="skill" className="design2" />
      </div>
      <div className="skills__title">
        <p>Our Skills</p>
        <h2>Check out our super awesome skills</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {
            skillsData.map(({ name, amount }) => {
              return (
                <motion.div
                  className="skills__bars__bar"
                  key={name}
                  animate={controls}
                  variants={skillsBarAnimations}
                  transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
                >
                  <div className="container">
                    <progress value={amount} max="100" />
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
              );
            })
          }
        </div>
        <div className="skills__content">
          <p className="title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, laborum!
          </p>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh.
            Morbi ornare purus dui, at imperdiet metus tempus a.
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  height: 140vh;
  background-color: var(--secondary-color);

  .background {
    position: relative;
    .design1 {
      position: absolute;
      z-index: 1;
      right: 0;
    }
    .design2 {
      position: absolute;
      top: 20rem;
      left: 0;
      z-index: 1;
    }
  }

  .sideTitle {
    h1 {
      color: white;
      font-size: 9rem;
      z-index: 2;
    }
  }

  .skills__title {
    padding: 6rem 10rem;
    p {
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2 {
      color: white;
      font-size: 2rem;
    }
  }

  .skills {
    display: flex;
    padding: 0 20rem;
    gap: 10rem;
    &__bars {
      transform: rotate(-90deg);
      width: max-content;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      &__bar {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;

        .container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          span {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--primary-color);
          }

          progress {
            width: 30rem;
            --webkit-appearance: none;
            appearance: none;
            &::-webkit-progress-bar {
              height: 3rem;
              background-color: white;
            }
            &::-webkit-progress-value {
              background-color: var(--primary-color);
            }
          }
        }

        h3 {
          transform: rotate(30deg);
          color: white;
          font-size: 2rem;
        }
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      z-index: 2;
      color: white;
      .title {
        font-weight: bolder;
        letter-spacing: 0.1rem;
      }
    }
  }
`;

export default Skills;
