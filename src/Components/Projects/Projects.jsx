import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Mock } from "../../Assets/Data/Mock/Data";
import "./Projects.scss";
console.log(Mock);
const Projects = () => {

  const [index, setIndex] = useState(0);

  let slidelength = Mock.projectImages.results.length;
  console.log(slidelength);
  return (
    <div className="Projects" id="projects">
      {/* <div className="slider"  style={{ left:`*-${100 * index}%`}}> */}
     <div className="slider"  style={{ left:`-${100 * index}%`}}>
        {Mock.projectImages.results.map((item) => {
          return (
            <div key={item.id} className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="image">
                      <img src={item.user.profile_image.medium} alt="" />
                    </div>
                    <h2>{item.alt_description}</h2>
                    <p>{item.updated_at}</p>
                    <span>projects</span>
                  </div>
                </div>
                <div className="right">
                  <img src={item.urls.regular} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="navigation">
        <div className="items">
          <MdKeyboardArrowLeft
            onClick={() =>
              index < 1 ? setIndex(slidelength - 1) : setIndex(index - 1)
            }></MdKeyboardArrowLeft>
          <MdKeyboardArrowRight
            onClick={() =>
              slidelength === index + 1 ? setIndex(0) : setIndex(index + 1)
            }></MdKeyboardArrowRight>
        </div>
      </div>
    </div>
  );
};

export default Projects;
