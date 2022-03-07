import React from "react";
import styled from "styled-components";
import Title from "./Title";

import play from "../assets/images/play.png";
import placeholder from "../assets/images/placeholder.png";

function Blog() {
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
    <Section id="blog">
      <Title value="blog" />
      <div className="decoration"></div>
      <div className="blog__list">
        {
          blogData.map(({ title, type, description }) => {
            return (
              <div className="blog">
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
              </div>
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
`;

export default Blog;
