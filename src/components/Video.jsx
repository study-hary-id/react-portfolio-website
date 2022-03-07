import React from "react";
import styled from "styled-components";

import video1 from "../assets/images/video1.png";
import video2 from "../assets/images/video2.png";

function Video() {
  return (
    <Section>
      <div className="background">
        <img src={video1} alt="video" className="design1" />
        <img src={video2} alt="video" className="design2" />
      </div>
      <div className="video">
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/B_RNoAScPMI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #662d91aa;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .video {
    z-index: 10;
  }

  .background {
    .design1 {
      position: absolute;
      bottom: -8rem;
      width: 18rem;
      left: 0;
    }

    .design2 {
      position: absolute;
      right: 5rem;
      top: 3rem;
    }
  }
`;

export default Video;
