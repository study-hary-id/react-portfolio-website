import React, { Fragment } from "react";
import styled from "styled-components";
import Title from "./Title";

import play from "../assets/images/play.png";
import pricing1 from "../assets/images/pricing1.png";
import pricing2 from "../assets/images/pricing2.png";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 9
    },
    {
      name: "Pro",
      price: 29
    },
    {
      name: "Expert",
      price: 49
    }
  ];

  const data = [
    {
      value: "25 Users per Project",
      type: "Basic",
    },
    {
      value: "100 Projects",
      type: "Basic",
    },
    {
      value: "10 TB Cloud Storage",
      type: "Basic",
    },
    {
      value: "50 Reports",
      type: "Basic",
    },
    {
      value: "100 GB Bandwidth",
      type: "Basic",
    },
    {
      value: "50 Support Tickets",
      type: "Basic",
    },
    {
      value: "Online Support",
      type: "Pro",
    },
    {
      value: "Daily Backup",
      type: "Pro",
    },
    {
      value: "Priority Assistance",
      type: "Expert",
    },
    {
      value: "One Click Setup",
      type: "Expert",
    }
  ];

  return (
    <Section>
      <Title value="Pricing" />
      <div className="background">
        <img src={pricing1} alt="pricing" className="design1" />
        <img src={pricing2} alt="pricing" className="design2" />
      </div>
      <div className="pricing__title">
        <p>Find you pricing plan</p>
        <h2>With pretty stories for which there is little good evidence</h2>
      </div>
      <div className="pricing">
        {
          plans.map(({ name, price }, index) => {
            return (
              <div className="pricing__plan" key={index}>
                <div className="pricing__plan__name">
                  <h2>{name}</h2>
                  <div className="pricing__plan__name__price">
                    <span>$</span>
                    <p>{price}</p>
                  </div>
                </div>
                <div className="pricing__plan__content">
                  <ul className={`pricing__plan__content__features ${name}`}>
                    {
                      data.map(({ value, type}, index2) => {
                        return (
                          <Fragment key={index2}>
                            {
                              name === "Basic" ?
                              (type === name ? <li>{value}</li> : <li className="line">{value}</li>) : 
                              (
                                name === "Pro" ? (
                                  type === "Basic" || type === name ? <li>{value}</li> : <li className="line">{value}</li>
                                ) : (
                                  name === "Expert" && <li>{value}</li>
                                )
                              )
                            }
                          </Fragment>
                        );
                      })
                    }
                  </ul>
                  <div className="pricing__plan__content__actions">
                    <span>Order Now</span>
                    <img src={play} alt="play" />
                  </div>
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
  padding: 5rem 0;
  position: relative;
  overflow: hidden;

  .background {
    .design1 {
      position: absolute;
      top: -60%;
      left: -5%;
      z-index: -1;
    }
    .design2 {
      position: absolute;
      bottom: 5rem;
      right: 0%;
    }
  }

  .pricing__title {
    margin: 6rem 10rem;

    p {
      color: var(--secondary-color);
      text-transform: uppercase;
      letter-spacing: 0.2rem;
    }
    h2 {
      color: var(--primary-color);
      font-size: 2rem;
    }
  }

  .pricing {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 10rem;

    .pricing__plan {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      &:nth-child(2) {
        .pricing__plan__content {
          padding: 0 5rem;
          border-left: 0.2rem solid var(--primary-color);
          border-right: 0.2rem solid var(--primary-color);
        }
      }

      &__name {
        background-color: var(--primary-color);
        width: 15rem;
        height: 15rem;
        border-radius: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--secondary-color);
        align-items: center;
        h2 {
          font-size: 2rem;
          line-height: 1.3rem;
        }
        &__price {
          color: white;
          display: flex;
          position: relative;
          span {
            position: absolute;
            top: 1rem;
            left: -0.9rem;
            font-size: 1.3rem;
          }
          p {
            font-size: 4rem;
            font-weight: bold;
          }
        }
      }

      &__content {
        &__features {
          list-style-type: none;
          text-align: center;
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          .line {
            text-decoration: line-through;
          }
          margin-bottom: 2rem;
        }
        &__actions {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: var(--primary-color);
          align-items: center;
          gap: 0.5rem;
          span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;

export default Pricing;
