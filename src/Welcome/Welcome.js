import React, { useEffect } from 'react'
import profileImge from '../images/IMG_0528 2.jpg'
import './Welcome.css'



function Welcome() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hideSec = document.querySelectorAll('.hide');
    hideSec.forEach((el) => observer.observe(el));

    return () => {

      hideSec.forEach((el) => observer.unobserve(el));
    };
  }, []);



  return (
    <div id="welcome-section" className="welcome-section hide">
      <div className="text-container">
        <h1>Hello, I'm<br /><span className='name'>Aaron Young</span></h1>
        <p className="welcome-p">Front-end web developer</p>
        <div className="btns">
          <a href="#contact">
            <button className="hire">Hire me</button>
          </a>
          <a href="../../images/Aaron Young - Front End Developer.pdf" rel='noreferrer' target="_blank" download>
            <button className="cv">Download CV</button>
          </a>
        </div>
        <div className='btns2'>
          <a href='https://www.linkedin.com/in/aaron-young-84100a258/' rel='noreferrer' target="_blank" >
            <button className='linked'>
              <i className="fab fa-linkedin-in"></i>
            </button>
          </a>
          <a href='https://github.com/MrYoung6?tab=overview&from=2023-08-01&to=2023-08-31' rel='noreferrer' target="_blank" >
            <button className='git'>
              <i className="fab fa-github"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="img-container">
        <img className="profile-img" alt='profile' src={profileImge} />
      </div>
    </div>
  )
}

export default Welcome