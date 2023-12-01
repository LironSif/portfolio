import React from 'react'
import ProjectCard from './ProjectCard'
import {myProjects} from '../data/data'
import './Project.css'


const Projects = () => {

  return (
   
    <div className='Projects-contianer'>
      <h2>My Projects</h2>
      <div className='Projects'>
      {myProjects.map((el,i)=> (
         <ProjectCard title={el.title}
          description={el.description}
          link={el.link}
          image={el.image}
          key={i}/>
          ))}
          </div>
     
      </div>
  )
}

export default Projects