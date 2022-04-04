import React from 'react';
import '../css/skills.css';
import talewind from '../assets/images/talewind-css.png';
import react from '../assets/images/react.png'
import python from '../assets/images/python.svg'
import nextjs from '../assets/images/next.png'
import aws from '../assets/images/aws.png'
import mysql from '../assets/images/mysql.png'

function Skills() {
  return (
    <>
      <div className='skills'>

        <div className='srow'>
          <div className='scol'>
            <div className='skill-card'>
            <img alt="skill-logo" className='react' src={react} />
            <span className='text-muted bold'>React.js</span>
            </div>
            <div className='skill-card'>
              <img alt="skill-logo" className='react' src={nextjs} />
              <span className='text-muted bold'>Next.js</span>
            </div>
            <div className='skill-card'>
              <img alt="skill-logo" style={{padding:'0 2px',background:'#131313'}} className='node' src='https://nodejs.org/static/images/logo.svg' />
              <span className='text-muted bold'>Node.js</span>
            </div>
          </div>
        </div>

        <div className='srow'>
          <div className='scol'>
          <div className='skill-card'>
             <img alt='github' className='github' src={aws} />
              <center><span className='text-muted bold'>AWS-Cloud</span></center>
            </div>
            <div className='skill-card'>
             <img alt='github' className='github' src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' />
              <center><span className='text-muted bold'>Git + Github</span></center>
            </div>
            <div className='skill-card'>
              <img className='python' src={python} alt='python' />
              <span className='text-muted bold'>Python</span>
            </div>
          </div>
        </div>

        <div className='srow'> 
          <div className='scol'>
            <div className='skill-card'>
              <img alt='mongodb' className='mongodb' src='https://www.mongodb.com/assets/images/global/favicon.ico' />
              <center><span className='text-muted bold'>Mongo-DB</span></center>
            </div>
            <div className='skill-card'>
              <img alt='mongodb' className='mongodb' src={mysql} />
              <center><span className='text-muted bold'>My-SQL</span></center>
            </div>
            <div className='skill-card'>
              <img alt="skill-logo" className='talewind' src={talewind} />
              <span className='text-muted bold'>Talewind</span>
            </div>
          </div>
        </div>

        <div className='srow'>
          <div className='scol'>
            <div className='skill-card'>
              <img alt="skill-logo" className='html' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png' />
              <span className='text-muted bold'>HTML</span>
            </div>
            <div className='skill-card'>
              <img alt="skill-logo" style={{width:'80%'}} className='css' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png' />
              <span className='text-muted bold'>CSS</span>
            </div>
            <div className='skill-card'>
              <img alt="skill-logo" className='js' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/131px-Unofficial_JavaScript_logo_2.svg.png' />
              <span className='text-muted bold'>Javascript</span>
            </div>  
          </div>
        </div>
        <div className='srow'>
          <div className='scol'>
            
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  );
}

export default Skills;
