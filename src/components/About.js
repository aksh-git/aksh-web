import React, { useState } from 'react';
import '../css/about.css';
import profile from '../assets/images/user.svg';
import Skills from './Skills';

function About() {

  const [aboutHeader, setaboutHeader] = useState(1);
  
    return (
      <div className='c-container'>
        <div className='about-c-container'>
          <div className='about-first'>
            <div className='banner'></div>
              <img className='banner-profile' src={profile} alt='profile'/>
            <div className='banner-below'>
              <div className='content-details'>
                <div className='one'>
                  <span style={{fontSize:'1.5rem',color:'#0092bd'}} className='text-normal'>Akash yadav</span>
                  <span className='text-muted bold'>Full-Stack Web Developer</span>
                  <span></span>
                </div>
                <div className='two'>
                  <span className='text-small bold'>
                    <i className='far fa-envelope'></i> sharewithakashyadav@gmail.com
                  </span>
                </div>
              </div>
              <div className='aboutme-words'>
                <span className='text-muted'><strong>Hii there!!</strong><br/>I'm Akash yadav <strong>Welcomes you !!</strong> i am a full stack web developer, i like computers, you know how these are changing lives of billions of people's and i'm also one of them. i love to code, this place is to represent my presence here on this internet world. Have a look on my work if you got some time.
                <br/><br/><strong>Thank you.. for visiting... Have a nice day!!</strong></span>
              </div>

              <div className='connect-with'>
                <ul>
                  <a rel="noreferrer" target='_blank' href='mailto:sharewithakashyadav@gmail.com'><li title='Email me' className='text-head'><i style={{color:'#ea4235'}} className='far fa-envelope'></i></li></a>
                  <a rel="noreferrer" target='_blank' href='https://www.twitter.com/akash_369_'><li title='Follow on twitter' className='text-head'><i style={{color:'#1d9bf0'}} className='fab fa-twitter'></i></li></a>
                  <a rel="noreferrer" target='_blank' href='https://www.github.com/aksh-git'><li title='View Github profile' className='text-head'><i  style={{color:'#000000'}} className='fab fa-github'></i></li></a>
                  <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/akash-yadav-36aa56230/'><li title='View My Linkedin' className='text-head'><i style={{color:'#0a66c2'}} className='fab fa-linkedin'></i></li></a>
                  <a rel="noreferrer" target='_blank' href='https://www.instagram.com/ig_akash369'><li title='Connect on instagram' className='text-head'><i style={{color:'#f73676'}} className='fab fa-instagram'></i></li></a>
                </ul>
              </div>
            </div>
          </div>
          <div className='about-second'>
            <div className='about-header'>
              <span onClick={()=>setaboutHeader(1)} className={`${aboutHeader===1?'active-header':' '} text-normal bold noselect`}><i className='fas fa-user-graduate'></i> Education</span>
              <span onClick={()=>setaboutHeader(2)} className={`${aboutHeader===2?'active-header':' '} text-normal bold noselect`}><i className="fas fa-code"></i> Skills</span>
              <span onClick={()=>setaboutHeader(3)} className={`${aboutHeader===3?'active-header':' '} text-normal bold noselect`}><i className='fas fa-briefcase'></i> Expertise</span>
            </div>
            <div className='about-content hidescrollbar'>
              <div style={{paddingTop:'3%',display:aboutHeader===1?'grid':'none'}} className='edu-1 c-container'>
                <span style={{padding:'5px'}}></span>
                <span className='text-normal bold'><i className='fas fa-graduation-cap'></i> - Academic courses</span>
                <span className='pad-2 text-muted bold'> * 10+2 - Science Stream | PCM | 2020</span>
                <span className='pad-2 text-muted bold'> * Bachelors of Computer Applications | 2020-23</span>
                <span className='pad-2 text-muted bold'> * Master of Computer Applications | 2023-25</span>
                <span style={{padding:'5px'}}></span>
                <span className='text-normal bold'><i className='fas fa-university'></i> - University</span>
                <span className='pad-2 text-muted bold'> * Gulzar Group of Institutes</span>
                <span style={{padding:'5px'}}></span>
                <span className='text-normal bold'><i className="fas fa-certificate"></i> - Participations apart from academic</span>
                <span className='pad-2 text-muted bold'> * Satellite based navigation | course by <strong>ISRO</strong> | 2021 </span>
                <span style={{padding:'5px'}}></span>
                <span className='text-normal bold'><i className="fas fa-seedling"></i> - Further</span>
                <span className='pad-2 text-muted bold'> I always wanna see growth in my own skills and capabilitie everyday even if it's a little one.</span>
                <span className='pad-2 text-muted bold'> # DevOps Engineer</span>
              </div>

              <div style={{paddingTop:'3%',display:aboutHeader===2?'block':'none'}} className='edu-2 c-container'>
                
                <Skills />
              </div>

              <div style={{paddingTop:'3%',display:aboutHeader===3?'grid':'none'}} className='edu-3 c-container'>
                <span style={{padding:'5px'}}></span>
                <span className='text-normal bold'><i className='fas fa-network-wired'></i> - MERN Stack</span>
                <span className='pad-2 text-muted bold'>MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.</span>
                <span className='pad-2 text-muted bold'>MongoDB - document database</span>
                <span className='pad-2 text-muted bold'>Express.js - node.js web framework</span>
                <span className='pad-2 text-muted bold'>React.js - a client-side JavaScript framework</span>
                <span className='pad-2 text-muted bold'>Node.js - the premier JavaScript web server</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}

export default About;