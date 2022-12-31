import React, { useEffect, useState } from "react";
import { Mock } from "../../Assets/Data/Mock/Data";
import Card from "../../Components/ProjectCard/Card";

const Portfolio = () => {

    const [tabData, setTabData] = useState(null);
    const [index, setIndex] = useState(1);


useEffect(() => {
    console.log(tabData);

}, [tabData]);

  return (
    <div className="Portfolio">
      <div className="heading"><h2>My Projects</h2></div>
      <div className="content">
        <div className="filter">
          <ul className="elements">
            {Mock.portFolioFilter.map((item) => (
              <li key={item.id} onClick={(e)=>setTabData(e.target.innerText)} className="btn element">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="projects">{Mock?.projectImages?.slice((index-1),6*index).map(item=><Card key={item.id} item={item} />)} </div>
        <div className="projectnavigation">
            <div className="totalproject">
                <div>Total Project: {Mock?.projectImages?.length}</div>
                <div>Showing: 1-6 of {Mock?.projectImages?.length}</div>
            </div>
            <div className="Pagination"><ul>{Array.from(Array(Mock?.projectImages?.length/6).keys()).map(item=>(
                <div key={item} onClick={(e)=>setIndex(e.target.innerText)}>{item+1}</div>
            ))}</ul></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
