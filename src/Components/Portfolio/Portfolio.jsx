import React, { useEffect, useState } from "react";
import { Mock } from "../../Assets/Data/Mock/Data";
import Card from "../ProjectCard/Card";
import "./Portfolio.scss";
const Portfolio = () => {
  const [tabData, setTabData] = useState(null);
  const [initialSize, setInitialSize] = useState(1);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    console.log(tabData);
  }, [tabData]);

  return (
    <div className="Portfolio" id="portfolio">
      <div className="portfolioWrapper">
        <div className="heading">
          <h2>Portfolio</h2>
        </div>
        <div className="content">
          <div className="filter">
            <ul className="elements">
              {Mock.portFolioFilter.map((item) => (
                <li
                  key={item.id}
                  onClick={(e) => setTabData(e.target.innerText)}
                  className="btn element">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="projects">
            {Mock?.projectImages
              ?.slice(
                Mock.projectImages.length <= initialSize-1
                  ? (initialSize-1) - 6
                  : (initialSize-1),
                (initialSize-1) + 6
              )
              .map((item) => (
                <Card key={item.id} item={item} />
              ))}{" "}
          </div>
          <div className="projectnavigation">
            <div className="totalproject">
              <div>Total Project: {Mock?.projectImages?.length}</div>
              <div>Showing: {(initialSize)}-{(initialSize-1)+6} of {Mock?.projectImages?.length}</div>
            </div>
            <div className="Pagination">
              <ul>
                <li
                  className={(initialSize === 1 && "disable")||(initialSize === 0 && "disable")}
                  onClick={(e) => {
                    setInitialSize(initialSize - 6);
                  }}>
                  Previous
                </li>
                <li
                  className={
                    (Mock.projectImages.length <= initialSize && "disable") || (Mock.projectImages.length <= initialSize+6 && "disable")
                  }
                  onClick={(e) => {
                    setInitialSize(
                      Mock.projectImages.length <= initialSize
                        ? initialSize - 6
                        : initialSize + 6
                    );
                  }}>
                  Next
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
