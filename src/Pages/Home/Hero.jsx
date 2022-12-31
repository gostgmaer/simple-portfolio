import React from 'react'

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="heroLeft">
            <div className='image'>
                <img src="https://o.remove.bg/downloads/14f2befb-c68d-4fe1-ac24-33a6a372f4c2/photo-1570612861542-284f4c12e75f-removebg-preview.png" alt="" />
                <div></div>
            </div>

        </div>
        <div className="heroRight">
            <div className="greeting">Hi there, I'M</div>
            <div className="name">Kishor Sarkar</div>
            <div className="profileAnimations">a Frontend Developer</div>
        </div>
    </div>
  )
}

export default Hero