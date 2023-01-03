import React, { useEffect, useRef } from "react";
import { MdArrowDownward, MdKeyboardArrowDown } from "react-icons/md";
import { Mock } from "../../Assets/Data/Mock/Data";
import "./intro.scss";
import { init } from "ityped";


const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Web", "Frontend", "Fullstack"],
    });
  }, []);

 

  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="./assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there i'm</h2>
          <h1>Kishor Sarkar</h1>
          <h4>
            Freelance <span ref={textRef}></span>
          </h4>
          <a href="#portfolio">
            <MdKeyboardArrowDown></MdKeyboardArrowDown>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
