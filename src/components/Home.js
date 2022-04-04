import '../css/home.css';
import boy from '../assets/images/boywithpc.png'
import profile from '../assets/images/user.svg';
import Logo from './Logo';

function Home() {
  let year = new Date().getFullYear();

  return (
    <>
    <div className='home-banner'>
      <div className='banner-image'>
        <span className="logo"><Logo logoColor={'#00a49e'} /></span>
        <img src={boy} alt='banner'/>
      </div>
      <div className='noselect banner-inside'>
        <span id="b-name">Akash Yadav</span>
        <span id="b-st">Full Stack Developer</span>
        <span className='text-muted'>Hey there!! i am Akash Yadav, i do full stack web development, <br/>this place is to represent my presence here on this internet world. Have a look on my work if you got some time.<br/><br/><strong>Thank you.. Have a nice day!!</strong></span>
        <div style={{display:'inline-block'}} className='btns'>
        </div>
      </div>
    </div>
      {/*Mobile*/}
    <div className='home-mobile c-container'>
      <div className='noselect inside section-0'>
        <div className='one'>
          <span className='profile-wrap'>
            <img className='noselect profile' src={profile} alt='profile'/>
          </span>
          <span className='headText text-head'>Akash yadav</span>
          {/*<span style={{fontSize:'.74rem'}} className='text-muted bold'>Full-Stack Web Developer</span>*/}
          <span style={{color: '#666666'}} className='headText text-decp'><span className='text-muted bold'>Welcomes you!!</span><br/></span>
        </div>
        <br/>
        <span className='text-decp'>
          <span className='text-muted bold'>
          Hey there!! i am Akash Yadav, i do full stack web development, this place is to represent my presence here on this internet world. Have a look on my work if you got some time.<br/><br/><strong>Thank you.. Have a nice day!!</strong>
          </span>
        </span>
        <div style={{display:'inline-block'}} className='btns'>
          <button></button>
        </div>

        <div className='footer'>
          
          <div className='social'> 
            <span className='text-decp'><span className='text-muted bold'><span className='b-t-col'>Social connect : </span></span></span><br/>
            <ul>
              <a rel="noreferrer" target='_blank' href='mailto:sharewithakashyadav@gmail.com'><li title='Email me' className='text-head'><i style={{color:'#ea4235'}} className='far fa-envelope'></i></li></a>
              <a rel="noreferrer" target='_blank' href='https://www.twitter.com/akash_369_'><li title='Follow on twitter' className='text-head'><i style={{color:'#1d9bf0'}} className='fab fa-twitter'></i></li></a>
              <a rel="noreferrer" target='_blank' href='https://www.github.com/aksh-git'><li title='View Github profile' className='text-head'><i  style={{color:'#ffffff'}} className='fab fa-github'></i></li></a>
              <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/akash-yadav-36aa56230/'><li title='View My Linkedin' className='text-head'><i style={{color:'#0a66c2'}} className='fab fa-linkedin'></i></li></a>
              <a rel="noreferrer" target='_blank' href='https://www.instagram.com/ig_akash369'><li title='Connect on instagram' className='text-head'><i style={{color:'#f73676'}} className='fab fa-instagram'></i></li></a>
            </ul>
          </div>
          <span className='text-small bold'><center>&copy; all rights reserved {year}</center></span>

        </div>

      </div>
    </div>
    </>
  );
}
  
export default Home;
  