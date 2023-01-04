import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./Projects.scss";
const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="image">
                  <img src="./assets/man.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, quam. Culpa, maiores excepturi.
                </p>
                <span>projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="navigation">
        <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
        <MdKeyboardArrowRight></MdKeyboardArrowRight>
      </div>
    </div>
  );
};

export default Projects;
