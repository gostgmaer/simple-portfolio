import React from 'react'
import './header.scss'
import { MdCall, MdDocumentScanner, MdEmail,MdMenu,MdOutlineDocumentScanner,MdPerson } from "react-icons/md";
import { useGlobalContext } from '../../Contexts/GlobalContext';
const Header = () => {

  const {toggleSidebarShow} = useGlobalContext()

  const DownloadResume = ()=>{

  }


  return (
    <header className='Header'>
        <div className="headerleft">
            <div className="logo">Kishor</div>
            <div className="contact">
            <div className="phone"><MdCall></MdCall><p>+918637317277</p></div>  <div className="email"><MdEmail></MdEmail><p>info@kishor.me</p></div>
            </div>
        </div>
        <div className="headerright">
          <div className='resume'><button onClick={DownloadResume}>Resume</button></div>
            <div className="hamburger"><MdMenu onClick={toggleSidebarShow}></MdMenu></div>
        </div>
    </header>
  )
}

export default Header