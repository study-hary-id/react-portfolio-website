import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "../animations";

import placeholder from "../assets/images/placeholder.png";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "Designer",
      name: "Marry Underwood",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a.",
    },
    {
      designation: "Developer",
      name: "Richard Gates",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a.",
    },
    {
      designation: "Planner",
      name: "Selen Oliveria",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a.",
    }
  ];

  return (
    <Section ref={element}>
      <div className="background">
        <img src={testimonial1} alt="testimonial" className="design1" />
        <img src={testimonial2} alt="testimonial" className="design2" />
      </div>
      <div className="container">
        <div className="testimonials">
          {
            testimonials.map(({ designation, name, review}, index) => {
              return (
                <motion.div
                  className={`testimonial ${
                    selected === index ? "active" : "hidden"
                  }`}
                  key={index}
                  animate={controls}
                  variants={testimonialsAnimations}
                  transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
                >
                  <div className="image">
                    <div className="circle1"></div>
                    <div className="circle2">
                      <img src={placeholder} alt="placeholder" />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">{designation}</span>
                    <h3 className="title">{name}</h3>
                  </div>
                  <p className="description">{review}</p>
                </motion.div>
              );
            })
          }
        </div>
        <motion.div
          className="controls"
          animate={controls}
          variants={testimonialsAnimations}
          transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
        >
          <button
            className={selected === 0 ? "active " : ""}
            onClick={() => setSelected(0)}
          ></button>
          <button
            className={selected === 1 ? "active " : ""}
            onClick={() => setSelected(1)}
          ></button>
          <button
            className={selected === 2 ? "active " : ""}
            onClick={() => setSelected(2)}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .background {
    position: relative;
    .design1 {
      position: absolute;
      height: 35rem;
      top: 10rem;
      left: 0;
    }
    .design2 {
      position: absolute;
      right: 0;
    }
  }

  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        .image {
          position: relative;
          .circle1 {
            position: absolute;
            left: -0.7rem;
            top: -0.7rem;
            height: 10rem;
            width: 10rem;
            border: 0.2rem solid white;
            border-radius: 10rem;
          }
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }

      .hidden {
        display: none;
      }

      color: white;
      .designation {
        color: var(--secondary-color);
      }

      .description {
        height: 8rem;
      }
    }

    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border-color: var(--secondary-color);
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }

    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
