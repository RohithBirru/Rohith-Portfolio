import React from 'react'
import './Intro.css'
import image from '../assets/image.png'
import downloadicon from '../assets/downloadicon.png'
import {Link} from 'react-scroll'


const pdfurl = "http://localhost:5173/RohithCV.pdf"

const Intro = () => {
  
    const downloadfile = (url) => {
      const filename=url.split('/').pop()
      const atag = document.createElement('a')
      atag.href=url
      atag.setAttribute('download', filename)
      document.body.appendChild(atag)
      atag.click()
    }
  return (
    <section id="intro">
        <div className="content">
          <span className="hello">Hello there..!</span> <br/>
          <span className="myname">My name is</span>
          <span className="rohith"> Rohith kumar</span>
          <p className="para">Seeking a challenging Entry level position in a reputed organization 
          where I can expand </p>
          <p className="para1">my knowledge and Leverage my learnings.</p>
          <Link className="Details">

          

             <button className="btn" onClick={ () => {
              downloadfile(pdfurl)
             }}>
                <img src={downloadicon} alt="" className="downloadicon" /> Resume</button>
    
        
          </Link>
        </div>
       
        <img src={image} alt="" className="image" />
    </section>
  )
}

export default Intro
