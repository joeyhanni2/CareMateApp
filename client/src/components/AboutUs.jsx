import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            With a focus on continuous improvement and a passion for medical advancements,
             Caremate stands at the forefront of modern healthcare. We believe in empowering our patients through education, 
             transparency, and collaborative decision-making, fostering a partnership that extends beyond the hospital walls.

            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
