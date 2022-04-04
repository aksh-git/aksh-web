import React, { useState } from 'react';
import '../css/contact.css';
import crossIcon from "../assets/images/cross.svg";

function Contact() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [errmsg, seterrmsg] = useState('');
  
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const changeName=(e)=>{
    setname(e.target.value.replace(/[^a-zA-Z]/g, ''));
  }

  const changeEmail=(e)=>{
    setemail(e.target.value);
  }

  const changeMessage=(e)=>{
    setmessage(e.target.value);
  }

  const animatePlane = () =>{
    document.getElementById('plane').style.animation="fly 4s";
  }

  const submitForm =(e)=>{
    e.preventDefault();
    if(name.length<3){
      seterrmsg("Your name is too short.")
    }else{
      if(!validateEmail(email)){
        seterrmsg("Your email address is Invalid.")
      }else{
        if(message.length<10){
          seterrmsg("Your message is too short.")
        }else{
          seterrmsg("Email Sent.")
          animatePlane()
        }
      }
    }
  }

  return (
    <>
      <div className="c-container contact-main">
      <span style={{padding:'15px'}}></span>
        <div style={{display:errmsg.length>2?'flex':'none'}} className='error-tv-wrap'>
          <div className='error-tv'>
            <span className='pad-2 text-normal'>{errmsg}</span>
            <img onClick={()=>seterrmsg("")} title='close' style={{width:'22px',cursor:'pointer'}} src={crossIcon} alt='close' />
          </div>
        </div>
        <form className="contact-form">
          <span style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} className='head text-muted bold'>
            <span className='b-t-col'>Contact me</span>
            <i id="plane" className="far fa-paper-plane"></i>  
          </span>
          <input value={name} onChange={changeName} className='text-normal input' type='text' placeholder='Your name'  required/>
          <input value={email} onChange={changeEmail} className='text-normal input' type='email' placeholder='Your email' required />
          <textarea value={message} onChange={changeMessage} maxLength='500' className='text-normal input'  placeholder='Write your messsage...' required></textarea>
          <button onClick={submitForm} type='submit' className='text-normal btn'><i className="far fa-envelope b-t-col"></i> <span className='b-t-col'>Send</span></button>
          <span style={{padding:'15px'}}></span>
          <span style={{display:'flex',alignItems:'center'}} >
            <span style={{padding:'0 15px 0 0'}} className='text-muted bold'>Other ways - </span>
            <a rel="noreferrer" target='_blank' href='https://www.twitter.com/akash_369_'><li title='Follow on twitter' className='text-head'><i style={{color:'#1d9bf0'}} className='fab fa-twitter'></i></li></a>
            <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/akash-yadav-36aa56230/'><li title='View My Linkedin' className='text-head'><i style={{color:'#0a66c2'}} className='fab fa-linkedin'></i></li></a>
            <a rel="noreferrer" target='_blank' href='https://www.instagram.com/ig_akash369'><li title='Connect on instagram' className='text-head'><i style={{color:'#f73676'}} className='fab fa-instagram'></i></li></a>
            <a rel="noreferrer" target='_blank' href='https://www.github.com/aksh-git'><li title='View Github profile' className='text-head'><i style={{color:'#000000'}} className='fab fa-github'></i></li></a>
          </span>
        </form>
      </div>
    </>
  );
}

export default Contact;
