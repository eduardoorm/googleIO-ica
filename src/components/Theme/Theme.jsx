import React from 'react'
import './Theme.css'
import ItemTheme from './ItemTheme'
const Theme = () => {
  return (
    <div className='sectionTheme'>
        <h1 className='title'>Tema</h1>
        <div className='containerThemes'>
            <ItemTheme></ItemTheme>
            <ItemTheme></ItemTheme>
        </div>
        
    </div>
  )
}

export default Theme