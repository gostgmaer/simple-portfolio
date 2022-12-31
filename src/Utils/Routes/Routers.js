import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../Pages/About/About'
import Contact from '../../Pages/Contact/Contact'
import Home from '../../Pages/Home/Home'
import Project from '../../Pages/Project/Project'
import Projects from '../../Pages/Projects/Projects'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/project:id' element={<Project></Project>}/>
    <Route path='/projects' element={<Projects/>}/>
   </Routes>
  )
}

export default Routers