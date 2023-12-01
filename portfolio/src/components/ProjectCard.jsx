import React, { useState } from 'react'
import './projectCard.css'



const ProjectCard = (props) => {



  return (
    <>
    <div className='project-card'>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.description}</p>

    </div>
    </>
  )
}

export default ProjectCard

