import React from 'react'
import Hero from './Hero'
import './home.scss'
import Portfolio from './Portfolio'
const Home = () => {
  return (
    <div className='Home'>
      <div className='homeWrapper'>
        <Hero></Hero>
        <Portfolio></Portfolio>
      </div>
    </div>
  )
}

export default Home