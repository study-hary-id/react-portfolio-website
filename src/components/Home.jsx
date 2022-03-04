import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

import home from "../assets/images/home.png";
import play from "../assets/images/play.png";

function Home() {
  return (
    <Section id="home">
      <Navbar />
    </Section>
  )
}

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  .home {
    height: 100%;

    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 18rem;
      width: 60%;

      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }

      .subTitle {
        p {
          // width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }

  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    color: white;
    padding: 4rem;

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }
  }
`;

export default Home;
