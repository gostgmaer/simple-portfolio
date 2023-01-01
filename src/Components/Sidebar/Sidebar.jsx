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
                <div className="logo"></div>
                <div className="close"><MdClose onClick={toggleSidebarShow}></MdClose></div>
            </div>
            <div className="content"></div>
            <div className="footer"></div>
        </div>
    </div>
  )
}

export default Sidebar