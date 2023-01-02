import React from 'react'
import { MdClose } from 'react-icons/md'
import { useGlobalContext } from '../../Contexts/GlobalContext'
import './Sidebar.scss'
const Sidebar = () => {

    const {toggleSidebarShow} = useGlobalContext()

  return (

    <div className='Sidebar'>
        <div className="sidebarWrapper">
            <div className="header">
                <div className="logo">Hi There</div>
                <div className="close"><MdClose onClick={toggleSidebarShow}></MdClose></div>
            </div>
            <div className="content">
              <ul className="navitems"><li></li></ul>
            </div>
            <div className="footer"><ul className='SocialMedia'><li></li></ul></div>
        </div>
    </div>
  )
}

export default Sidebar