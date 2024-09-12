import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          At Caremate, Your Health is <br />
          Our Responsibility
        </h1>
        <p>
        Compassionate care, cutting-edge treatments and a commitment to your well-being - all under one roof. 
        Our team of expert professionals is dedicated to providing personalized healthcare solutions
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
