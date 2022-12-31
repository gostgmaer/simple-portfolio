import React from 'react'
import './header.scss'
import { MdCall, MdEmail,MdMenu,MdPerson } from "react-icons/md";
const Header = () => {
  return (
    <header className='Header'>
        <div className="headerleft">
            <div className="logo">Kishor</div>
            <div className="contact">
            <div className="phone"><MdCall></MdCall><p>+918116030952</p></div>  <div className="email"><MdEmail></MdEmail><p>info@kishor.me</p></div>
            </div>
        </div>
        <div className="headerright">
            <div className="hamburger"><MdMenu></MdMenu></div>
        </div>
    </header>
  )
}

export default Header