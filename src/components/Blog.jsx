import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Title from "./Title";
import { useScroll } from "./useScroll";
import { blogsAnimations } from "../animations";

import play from "../assets/images/play.png";
import placeholder from "../assets/images/placeholder.png";

function Blog() {
  const [element, controls] = useScroll();

  const blogData = [
    {
      title: "Lorem Ipsum",
      type: "Adventure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a."
    },
    {
      title: "Lorem Ipsum",
      type: "Personal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a."
    },
    {
      title: "Lorem Ipsum",
      type: "Education",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
        "Vivamus pharetra mi tincidunt diam porttitor sollicitudin feugiat sed nibh." +
        "Morbi ornare purus dui, at imperdiet metus tempus a."
    }
  ];

  return (
    <Section id="blog" ref={element}>
      <Title value="blog" />
      <div className="decoration"></div>
      <div className="blog__list">
        {
          blogData.map(({ title, type, description }) => {
            return (
              <motion.div
                className="blog"
                animate={controls}
                variants={blogsAnimations}
                transition={{ delay: 0.03, type: "tween", duration: 0.8 }}
              >
                <div className="image">
                  <img src={placeholder} alt="placeholder" />
                </div>
                <div className="title"><h3>{title}</h3></div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>
                </div>
                <div className="more">
                  <img src={play} alt="play" />
                  <span>Read More</span>
                </div>
              </motion.div>
            );
          })
        }
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  position: relative;

  .decoration {
    position: absolute;
    height: 20rem;
    width: 70vw;
    border: 0.5rem solid var(--secondary-color);
    left: 15%;
    top: -2rem;
  }

  .blog__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 5rem 20rem;
    gap: 3rem;

    .blog {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .image {
        height: 22rem;
        background-color: #a686f0af;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 2rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 1rem;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;

    .decoration {
      display: none;
    }

    .blog__list {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
