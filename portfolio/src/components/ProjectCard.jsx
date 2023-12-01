import React from 'react';
import './projectCard.css';

const ProjectCard = ({ title, description, linkNet, linkGit, image, index }) => {
  return (
    <div className='project-card' data-animate={`animation-${index % 4}`}>
      <h2 className='hcard2-'>{title}</h2>
      <img src={image} alt={`Screenshot of ${title}`} />
      <p>{description}</p>
      <div className='project-links'>
        {linkNet && (
          <a href={linkNet} target="_blank" rel="noopener noreferrer">View Site</a>
        )}
        {linkGit && (
          <a href={linkGit} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
