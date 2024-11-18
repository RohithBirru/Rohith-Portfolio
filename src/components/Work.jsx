import React from 'react'
import './work.css'
import comm from '../assets/comm.png'
import confident from '../assets/confident.png'
import present from '../assets/present.png'
import negotiate from '../assets/negotiate.png'
import teamplay from '../assets/teamplay.png'
import prob from '../assets/prob.png'

const Work = () => {
  return (
     <section id="work">
        <h2 className='worktitle'>Emotional Intelligence</h2>
        <div className="workpics">
            <img src={comm} alt="" className="workpic"/>
            <img src={confident} alt="" className="workpic"/>
            <img src={present} alt="" className="workpic"/>
            <img src={negotiate} alt="" className="workpic"/>
            <img src={teamplay} alt="" className="workpic"/>
            <img src={prob} alt="" className="workpic"/>
          
        </div>
        <button className="seemore">See more</button>
     </section>
  )
}

export default Work
