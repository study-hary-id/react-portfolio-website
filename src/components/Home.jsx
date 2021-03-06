import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Navbar from "./reusable/Navbar";
import { homeAnimations, homeInfoAnimations } from "../animations";

import home from "../assets/images/home.png";
import play from "../assets/images/play.png";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Digital Crafters</h1>
          </div>
          <div className="subTitle">
            <p>
              I'm a self taught learner who likes technology around <em>web development</em> especially
              in <strong>Backend Development</strong> and <strong>Artificial Intelligence</strong> or <strong>Machine Learning</strong>.
              Also has more interest in designing, enhancing, and maintaining web applications
              using <strong>Go</strong>, <strong>Python</strong>, and <strong>JavaScript</strong>.
            </p>
          </div>
          <img src={play} alt="play" />
        </div>
      </motion.div>

      <motion.div
        className="info"
        variants={homeInfoAnimations}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="grid">
          <div className="col">
            <strong>Agency</strong>
            <p>Intelegency Technology International</p>
          </div>
          <div className="col">
            <strong>Email</strong>
            <p>haryansyah.person.id @gmail.com</p>
          </div>
          <div className="col">
            <strong>Mobile</strong>
            <p>+62 818 0612 2365</p>
          </div>
          <div className="col">
            <strong>Address</strong>
            <p>Kab. Bogor, Jawa Barat</p>
            <p>16710 Klapanunggal</p>
          </div>
          <div className="col">
            <strong>Services</strong>
            <p>Front-end Engineer</p>
            <p>Back-end Engineer</p>
          </div>
          <div className="col">
            <strong>Working Hours</strong>
            <p>Monday to Friday</p>
            <p>09:00 to 17:00</p>
          </div>
        </div>
      </motion.div>
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
      padding-left: 14rem;
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

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding: 0 2rem;
        width: 100%;
        margin-top: 2rem;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 3.25rem;
            line-height: 4rem;
          }
        }

        .subTitle {
          p {
            text-align: justify;
          }
        }
      }
    }

    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }

  @media screen and (max-height: 909px) and (min-width: 1080px) {
    height: 909px;
  }
`;

export default Home;
