import React from 'react'
import './Card.scss'

const Card = ({item}) => {
  return (
    <div className='Card'>
        <div className="cardWrapper">
            <div className="cardImage"><img src={item?.attributes.image.large} alt="" /></div>
            <div className="cardContent">
                <span className="cardHeading">
                    <h3>{item?.attributes.slug}</h3>
                </span>
                <div className="Carddetails"></div>
            </div>
        </div>
    </div>
  )
}

export default Card