import React from "react";
import "./intro.css";
import man from "../../assets/man.png";
import btnImg from "../../assets/work.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="cont">
        <span className="hello">Hello,</span>
        <div class="static-txt">I'm a</div>
        <div class="wrapper">
          <ul class="dynamic-txts">
            <li>
              <span>FRONTEND DEVELOPER</span>
            </li>
            <li>
              <span>BACKEND DEVELOPER</span>
            </li>
            <li>
              <span>FULL STACK DEVELOPER</span>
            </li>
          </ul>
        </div>
        <p className="intropara">
          I an a Full Stack Developer skilled in both frontend and <br />
          Backend in creating websites with friendly user Interface.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="workbtn" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={man} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
