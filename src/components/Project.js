import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import '../css/project.css';
import Loder from './Loder';

function Project() {

  const [projects, setProjects] = useState([]);

  const updateProjects = async () => {
    try {
      const projectURL = 'https://raw.githubusercontent.com/aksh-git/helpers/main/projects.json';
      let data = await fetch(projectURL);
      let parsedData = await data.json();
      setProjects(parsedData.project);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    updateProjects()
  }, []);
  

  return(
      <>
        <div style={{display:projects.length>1?'none':'flex'}} className='loder pad-2'>
          <Loder color={'#00a49e'} />
          <span style={{color:'#00a49e'}} className='bold text-normal'>Loading...</span>
        </div>
        <div className='project c-container'>
          <div className="row">
            {projects.map((proj)=>{
              return(
              <div className='col-md-3 my-2'>
                <ProjectCard project={proj} key={proj.projectURL}/>
              </div>
              )
            })}
          </div>
       </div>
      </>
  );
}

export default Project;
