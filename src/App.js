import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Projects from './Routes/Projects';
import Project from './Routes/Project';




function App() {
  return (
<React.Fragment>
  <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
    <Route path='/about' element={<About></About>} ></Route>
    <Route path='/contact' element={<Contact></Contact>} ></Route>
    <Route path='/projects' element={<Projects></Projects>} ></Route>
     <Route path='/project/:id' element={<Project></Project>} ></Route>
    
  </Routes>
</React.Fragment>
  );
}

export default App;
