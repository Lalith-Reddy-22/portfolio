import React from "react";
import "./skill.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import boot from "../../assets/boot.png";
import js from "../../assets/js.png";
import cpp from "../../assets/cpp.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import kotlin from "../../assets/kotlin.png";
import C from "../../assets/c.png";
import OS from "../../assets/os.png";
import WF from "../../assets/wf.png";
import tool from "../../assets/tools.png";
import idea from "../../assets/light-bulb.png";

const Skill = () => {
  return (
    <section id="learn">
      <span className="Stitle">SKILLS</span>
      <span className="Sdesc">
        All the programming Languages and Scripts Which i am good at
      </span>
      <div className="container">
        <div className="Bars">
          <div className="Bar">
            <img src={html} alt="html" className="BarImg" />
            <div className="BarText">
              <h2>HTML</h2>
            </div>
          </div>
          <div className="skillBar">
            <img src={css} alt="css" className="BarImg" />
            <div className="BarText">
              <h2>CSS</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={boot} alt="boot" className="BarImg" />
            <div className="BarText">
              <h2>BOOTSTRAP</h2>
            </div>
          </div>
        </div>
        <div className="Bars">
          <div className="Bar">
            <img src={js} alt="js" className="BarImg" />
            <div className="BarText">
              <h2>JAVASCRIPT</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={cpp} alt="cpp" className="BarImg" />
            <div className="BarText">
              <h2>CPP</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={python} alt="python" className="BarImg" />
            <div className="BarText">
              <h2>PYTHON</h2>
            </div>
          </div>
        </div>
        <div className="Bars">
          <div className="Bar">
            <img src={java} alt="java" className="BarImg" />
            <div className="BarText">
              <h2>JAVA</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={sql} alt="sql" className="BarImg" />
            <div className="BarText">
              <h2>SQL</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={kotlin} alt="kotlin" className="BarImg" />
            <div className="BarText">
              <h2>KOTLIN</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container123">
        <img src={tool} alt="tool" className="toolbox" />
        <div className="Bars">
          <div className="Bar">
            <img src={C} alt="kotlin" className="BarImg" />
            <div className="BarText">
              <h2>C</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={OS} alt="OS" className="BarImg" />
            <div className="BarText">
              <h2>OPERATING SYSTEMS</h2>
            </div>
          </div>
          <div className="Bar">
            <img src={WF} alt="WF" className="BarImg" />
            <div className="BarText">
              <h2>WIREFRAME</h2>
            </div>
          </div>
        </div>
        <img src={idea} alt="idea" className="idea" />
      </div>
    </section>
  );
};

export default Skill;
