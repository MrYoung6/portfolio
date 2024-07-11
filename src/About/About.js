import React from 'react'
import './About.css'

function About() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  });

  const hideSec = document.querySelectorAll('.hide');
  hideSec.forEach((el) => observer.observe(el));

  function showDiv(event) {

    const info = document.getElementById('info');
    const info2 = document.getElementById('info2');

    if (info.style.display === 'flex') {
      info.style.display = 'none';
    } else {
      info.style.display = 'flex';
      info2.style.display = 'none';
    }
    event.preventDefault();
  }

  return (

    <div id="skills" className="hide">
      <>
        <h2>About</h2>
        <div className="more-info">
          <div className="info-img">
            <img src="../../images/70DE3834-C087-4AE2-96E3-479959F2C068_1_105_c.jpeg" />
          </div>
          <div className="info-p">
            <p className='main-p'>As a front-end web developer, I excel in HTML, CSS, and JavaScript, creating captivating user interfaces. I have hands-on experience rebuilding websites for a karate school over a few months, where I developed a website enabling users to access the karate school schedule and explore various programs offered. I also implemented functionality to view upcoming events and provided information about the karate instructors.</p>
            <p> My expertise extends to building React and React/Redux applications, seamlessly integrating APIs for enhanced functionality. Beyond coding, I've attended a couple bootcamps (<a className='freecode-camp' href='https://www.freecodecamp.org/certification/fcc74b1ae7b-3232-40f3-ba3e-ad3f7381346b/responsive-web-design'>FreeCodeCamp</a> and Codecademy), reflecting my commitment to continuous learning. Outside of work, I channel my passion for fitness and martial arts training, balancing both professional and personal pursuits effectively.</p>
          </div>
        </div>
      </>
      <div className="btm-skills">
        <div className="skills-container">
          <h3>Skills</h3>
          <div className="stack-wrapper">
            <div className="stack-container">
              <div className="stack-portion">
                <p>React/Redux</p>
                <i className="fa-brands fa-react tech"></i>
              </div>
              <div className="stack-portion">
                <p>HTML</p>
                <i className="fa-brands fa-html5 tech"></i>
              </div>
              <div className="stack-portion">
                <p>CSS</p>
                <i className="fa-brands fa-css3-alt tech"></i>
              </div>
              <div className="stack-portion">
                <p>Figma</p>
                <i className="fa-brands fa-figma tech"></i>
              </div>
              <div className="stack-portion">
                <p>JavaScript</p>
                <i className="fa-brands fa-square-js tech"></i>
              </div>
              <div className="stack-portion">
                <p>Github</p>
                <i className="fa-brands fa-github tech"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default About;