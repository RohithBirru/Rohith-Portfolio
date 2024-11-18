import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills">

        <span className="skilltitle">About Me</span>
        <span className="skilldescription">I have a strong proficiency in frontend technologies like HTML, CSS, JavaScript, and React, as well as a solid understanding of backend technologies including Node.js, Express, MongoDB, and RESTful APIs</span>
        <div className="skillbars">
                <div className="skillbar">
                  <div className="skillbartext">
                    <h2>Website design</h2>
                    <p className="skillpara">Designing website using html,css,css animations</p>
                  </div>
                </div>
            <div className="skillbar">
              <div className="skillbartext">
                    <h2>Asynchronous Programming</h2>
                    <p className="skillpara">Problem solving with asynchronous programming using javascript</p>
                </div>
            </div>
        
            <div className="skillbar">
              <div className="skillbartext">
                    <h2>RestFul API's</h2>
                    <p className="skillpara">Creating own restful apis using node,express,mongoDB</p>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Skills
