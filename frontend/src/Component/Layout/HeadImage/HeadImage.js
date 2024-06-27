import React from 'react'
import './HeadImage.css'
import img from '../../imges/Rectangle 10.jpg'
import img1 from '../../imges/Ellipse 19.jpg'
function HeadImage() {
  return (
    <div className='headimage'>
        <img src={img} alt='img'  style={{width:"60px"}}/>
        <img src={img1} alt='img' style={{width:"9px"}}/>
    </div>
  )
}

export default HeadImage