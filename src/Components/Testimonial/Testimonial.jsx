import React, { Fragment } from "react";
import {
  MdArrowBackIosNew,
  MdArrowCircleDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { Mock } from "../../Assets/Data/Mock/Data";
import "./Testimonial.scss";
const Testimonial = () => {
  return (
    <Fragment>
      <div className="Testimonial" id="testimonial">
        
          <div className="heading">
            <h2>Testimonials</h2>
          </div>
          <div className="content">
            <div className="container">
              <div className="card">
                {Mock.testimonial.map(data =>{
                  return <div key={data.id} className="items">

                  </div>
                })}
               
              </div>
            </div>
          </div>
          <div className="arrowContainer">
            <div className="arrowWrapper">
              <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
              <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </div>
          </div>
        </div>
     
    </Fragment>
  );
};

export default Testimonial;
