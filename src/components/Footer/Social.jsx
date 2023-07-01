import React from 'react'
import './Social.css'
const Social = ({imageUrl,href}) => {
  return (
    <div className="social">
    <a target='_blank' href={href}><div className="imgLogo"  style={{backgroundImage: `url(${imageUrl})`}}></div></a>   
    </div>
  )
}

export default Social