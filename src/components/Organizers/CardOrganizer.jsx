import React from 'react'
import './CardOrganizer.css'
const CardOrganizer = ({imageUrl,href}) => {
  return (
    <div className='organizer'>
      <a target='_blank' href={href}>
      <div className='imgOrganizer' style={{backgroundImage: `url(${imageUrl})`}}></div>
      </a>
    </div>
  )
}

export default CardOrganizer