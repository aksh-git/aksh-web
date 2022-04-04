import React from 'react';
import '../css/projectCard.css';

function ProjectCard(props) {

    const { title, decp, tools, imageURL, projectURL } = props.project;

  return (
    <>
      <div onClick={()=>window.open(projectURL)} className='noselect project-card'>
        <span className='title b-t-col bold'>{title}</span>
        <img src={imageURL} alt='Project-banner' />
        <span className='decp text-muted'>{decp}</span>
        <hr className='text-muted'/>
        <span className='foot'>
          <span className='tools'><span className='bold'>Tools used -</span> {tools}</span>
          <i onClick={()=>window.open(projectURL)} title='Go to Project' className='head fas fa-external-link-square-alt'></i>
        </span>
      </div>
    </>
  );
}

export default ProjectCard;
