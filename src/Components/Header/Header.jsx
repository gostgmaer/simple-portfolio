import React from "react";
import "./header.scss";
import {
  MdCall,
  MdClose,
  MdDocumentScanner,
  MdEmail,
  MdMenu,
  MdOutlineDocumentScanner,
  MdPerson,
} from "react-icons/md";
import { useGlobalContext } from "../../Contexts/GlobalContext";
import { Link } from "react-router-dom";
import { Mock } from "../../Assets/Data/Mock/Data";
const Header = () => {
  const { toggleSidebarShow, toggleSidebar } = useGlobalContext();

  const DownloadResume = (dataurl, filename) => {
    const link = document.createElement("a");
    link.href = dataurl;
    link.download = filename;
    link.click();
  };
 
  
 

  return (
    <header className={`Header ${toggleSidebar&& 'active'}`}>
      <div className="headerWrapper">
        <div className="headerleft">
          <div className="logo">
            <a href="#intro">Kishor</a>
          </div>
          <div className="contact">
            <div className="phone">
              <MdCall></MdCall>
              <p>+918637317277</p>
            </div>{" "}
            <div className="email">
              <MdEmail></MdEmail>
              <p>info@kishor.me</p>
            </div>
          </div>
        </div>
        <div className="headerright">
          <div className="resume">
          {/* <a href="./assets/Sample-Resumes.pdf" rel="noreferrer" target="_blank">Download</a> */}
            <button onClick={()=> DownloadResume("./assets/Sample-Resumes.pdf", "Sample-Resumes.pdf")}>Resume</button>
          </div>
          <div className="hamburger">
            {toggleSidebar ? (
              <MdClose onClick={toggleSidebarShow}></MdClose>
            ) : (
              <MdMenu onClick={toggleSidebarShow}></MdMenu>
            )}
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
