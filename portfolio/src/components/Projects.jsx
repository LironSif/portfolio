import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '../data/data';
import './Project.css';

const Projects = () => {

  return (
    <div  className='Projects-container' id='My Projects'>
      <h2 className='big-h2'>My Projects</h2>
      <div className='Projects'>
        {myProjects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            linkNet={project.netlifyLink}
            linkGit={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
