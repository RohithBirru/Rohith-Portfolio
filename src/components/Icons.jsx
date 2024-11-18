import React from 'react'
import './Icons.css'
import facebook from '../assets/facebook.png'
import yt from '../assets/yt.png'
import linkedin from '../assets/linkedin.png'

const Icons = () => {
  return (
    <session id="iconsec">
    <div className="">
              <img src={facebook} alt="" className="link" />
               <img src={yt} alt="" className="link" />
               <img src={linkedin} alt="" className="link1" />
    </div>
    </session>
  )
}

export default Icons
