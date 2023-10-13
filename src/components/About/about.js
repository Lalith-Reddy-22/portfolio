import React from "react";
import "./about.css";
import front from "../../assets/web.png";
import back from "../../assets/back.png";
import data from "../../assets/data.png";

const About = () => {
  return (
    <section id="skills">
      <span className="title">What I do</span>
      <span className="desc">
        I an a Full Stack Developer skilled in both Frontend and Backend in
        creating websites with friendly user Interface.I am good in
        HTML,CSS,BOOTSTRAP,JAVASCRIPT and other basic programming Languages
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={front} alt="html" className="skillBarImg" />
          <div className="skillBarText">
            <h2>FRONT END</h2>
            <p>Create Interactive and user friendly websites</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={back} alt="css" className="skillBarImg" />
          <div className="skillBarText">
            <h2>BACKEND</h2>
            <p>Build websites using the backend javascript</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={data} alt="boot" className="skillBarImg" />
          <div className="skillBarText">
            <h2>CONNECT DATA</h2>
            <p>Write SQL and MongoDB queries to manage and access the data</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
