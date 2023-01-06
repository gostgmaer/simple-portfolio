import "./App.scss";
import React from "react";
import Header from "./Components/Header/Header";
import Routers from "./Utils/Routes/Routers";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useGlobalContext } from "./Contexts/GlobalContext";
import Intro from "./Components/Intro/Intro";
import Testimonial from "./Components/Testimonial/Testimonial";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projects from "./Components/Projects/Projects";
import ContactForm from "./Components/ContactForm/ContactForm";
import { Mock } from "./Assets/Data/Mock/Data";
import { MdArrowBack, MdBolt, MdTripOrigin } from "react-icons/md";

function App() {
  const { toggleSidebar } = useGlobalContext();

  return (
    <div className="app">
      <Header></Header>
      {toggleSidebar && <Sidebar />}
      <div className="section">
        <Intro></Intro>
        <Portfolio></Portfolio>
        <Projects></Projects>
        {/* <Testimonial></Testimonial> */}
        <ContactForm></ContactForm>
      </div>
      <div className="navigationBullet">
        <ul>
          {Mock.Navigation.map((item) => (
            <li key={item.id}>
              <a  href={`#${item.url}`}>
                <MdTripOrigin></MdTripOrigin>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
