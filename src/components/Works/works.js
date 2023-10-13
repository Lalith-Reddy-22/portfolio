import React from "react";
import "./works.css";
import portfolio1 from "../../assets/1.jpg";
import portfolio2 from "../../assets/2.jpg";
import portfolio3 from "../../assets/3.jpg";
import portfolio4 from "../../assets/4.jpg";
import portfolio5 from "../../assets/5.jpg";
import portfolio6 from "../../assets/6.jpg";
import portfolio7 from "../../assets/7.jpeg";
import portfolio8 from "../../assets/8.jpeg";

const Works = () => {
  const handleImageClick = (imageNumber) => {
    console.log(`Clicked on image ${imageNumber}`);
  };

  return (
    <section id="works">
      <h2 className="worktitle">MY PORTFOLIO</h2>
      <span className="workdesc">
        Here are My projects Done during this course.
      </span>
      <div className="workimgs">
        <a
          href="https://count-lk2u.vercel.app/"
          onClick={() => handleImageClick(1)}
          className="workimg-container"
        >
          <img src={portfolio1} alt="" className="workimg" />
          <div className="img-text">WORD COUNT</div>
        </a>
        <a
          href="https://calci-gamma.vercel.app/"
          onClick={() => handleImageClick(2)}
          className="workimg-container"
        >
          <img src={portfolio2} alt="" className="workimg" />
          <div className="img-text">CALCULATOR</div>
        </a>
        <a
          href="https://color-picker-mauve-nine.vercel.app/"
          onClick={() => handleImageClick(3)}
          className="workimg-container"
        >
          <img src={portfolio3} alt="" className="workimg" />
          <div className="img-text">COLOR PICKER</div>
        </a>
        <a
          href="https://data-extraction-beryl.vercel.app/"
          onClick={() => handleImageClick(4)}
          className="workimg-container"
        >
          <img src={portfolio4} alt="" className="workimg" />
          <div className="img-text">DATA EXTRACTION</div>
        </a>
        <a
          href="https://age-murex.vercel.app/"
          onClick={() => handleImageClick(5)}
          className="workimg-container"
        >
          <img src={portfolio5} alt="" className="workimg" />
          <div className="img-text">AGE CALCULATOR</div>
        </a>
        <a
          href="/"
          onClick={() => handleImageClick(6)}
          className="workimg-container"
        >
          <img src={portfolio6} alt="" className="workimg" />
          <div className="img-text">PORTFOLIO</div>
        </a>
        <a
          href="https://lalith-kuamr.github.io/TASK1/"
          onClick={() => handleImageClick(6)}
          className="workimg-container"
        >
          <img src={portfolio7} alt="" className="workimg" />
          <div className="img-text">HTML AND CSS</div>
        </a>
        <a
          href="https://lalith-kuamr.github.io/TASK-2/"
          onClick={() => handleImageClick(6)}
          className="workimg-container"
        >
          <img src={portfolio8} alt="" className="workimg" />
          <div className="img-text">BOOTSTRAP AND JAVASCRIPTS</div>
        </a>
      </div>
    </section>
  );
};

export default Works;
