import React from "react";
import "./About.css";
import ME from "../../assets/about.png";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Anant</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Anant About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresh College Graduate(2022)</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Tech Stack </h5>
              <small>MERN Stack</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>
          </div>
          <p>
            Hey there, I am currently in 8th semester of Bachelors of Technology(majors in Electronics and Communication) at Vellore Institute of Technology, India.
            
          </p>
          <a href="#contact" className="btn third btn-primary about-btn">
            Talk To Anant
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
