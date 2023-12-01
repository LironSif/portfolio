import React, { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { myProjects } from '../data/data';
import './Project.css';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div ref={projectsRef} className='Projects-container'>
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
