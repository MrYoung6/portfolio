import React, { useEffect } from 'react'
import ipTracker from '../images/Screen Shot 2024-06-21 at 1.52.04 PM.png'
import tapGame from '../images/turtle tap screenshot.png'
import karate from '../images/Screen Shot 2024-05-31 at 12.12.40 PM.png'
import pulse from '../images/pulse play screenshot.png'
import reddit from '../images/redditstream screenshot.png'
import shortener from '../images/Screen Shot 2024-06-12 at 3.19.09 PM.png'
import './Projects.css'

function Projects() {
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
    <div id="projects" className="projects-section hide">
      <h2>Projects</h2>
      <div className="cover">
        <div className='left-side'>
          <a href="https://ipaddytracker.netlify.app/" rel="noreferrer" target="_blank" className="project project-tile">
            <img className="project-img" src={ipTracker} alt="" />
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>IP Address Tracker</h3>
          <p className='project-info'>Users can see their IP address along with the location on the map upon initial page load. They can search for any IP address or domain name to view key information and the corresponding location on the map. The application is responsive to all screens, and users can see hover states for interactive elements.</p>
          <a href='https://ipaddytracker.netlify.app/' rel='noreferrer' target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
          <a href='https://github.com/MrYoung6/Ip-tracker' rel='noreferrer' target="_blank">
            <button className='code'>Code<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 6.2635L10.4523 18.2635L9.04784 17.7368L13.5478 5.73682L14.9523 6.2635ZM19.1894 12.0001L15.9698 8.78042L17.0304 7.71976L21.3108 12.0001L17.0304 16.2804L15.9698 15.2198L19.1894 12.0001ZM8.03032 15.2198L4.81065 12.0002L8.03032 8.78049L6.96966 7.71983L2.68933 12.0002L6.96966 16.2805L8.03032 15.2198Z" fill="#ffffff">
              </path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="cover">
        <div className='left-side'>
          <a href="https://mryoung6.github.io/Tap_Game/" rel='noreferrer' target="_blank" className="project project-tile">
            <img className="project-img" src={tapGame} alt="" />
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>Tap Game</h3>
          <p className='project-info'>I developed a game using HTML, CSS, and JavaScript, where the objective is to make a turtle move towards the finish line by tapping the spacebar as quickly as possible within a 30-second timeframe. The game includes a tap counter that displays the number of spacebar presses. Once the 30-second duration elapses, the final score is revealed to the player.</p>
          <a href='https://mryoung6.github.io/Tap_Game/' rel='noreferrer' target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
          <a href='https://github.com/MrYoung6/Tap_Game' rel='noreferrer' target="_blank">
            <button className='code'>Code<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 6.2635L10.4523 18.2635L9.04784 17.7368L13.5478 5.73682L14.9523 6.2635ZM19.1894 12.0001L15.9698 8.78042L17.0304 7.71976L21.3108 12.0001L17.0304 16.2804L15.9698 15.2198L19.1894 12.0001ZM8.03032 15.2198L4.81065 12.0002L8.03032 8.78049L6.96966 7.71983L2.68933 12.0002L6.96966 16.2805L8.03032 15.2198Z" fill="#ffffff">
              </path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="cover">
        <div className='left-side'>
          <a href="https://shortenerapi.netlify.app" rel="noreferrer" target="_blank" className="project project-tile">
            <img className="project-img" src={shortener} alt="" />
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>Link Shortener</h3>
          <p className='project-info'>I developed a responsive web app using React, centered around a URL shortener API. Users can easily generate, manage, and retrieve shortened links, which are displayed in a list format. Features include one-click copying of links to the clipboard and error handling for invalid or empty URLs, ensuring a smooth user experience.</p>
          <a href='https://shortenerapi.netlify.app' rel="noreferrer" target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
          <a href='https://github.com/MrYoung6/URL-shortening-API' rel="noreferrer" target="_blank">
            <button className='code'>Code<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 6.2635L10.4523 18.2635L9.04784 17.7368L13.5478 5.73682L14.9523 6.2635ZM19.1894 12.0001L15.9698 8.78042L17.0304 7.71976L21.3108 12.0001L17.0304 16.2804L15.9698 15.2198L19.1894 12.0001ZM8.03032 15.2198L4.81065 12.0002L8.03032 8.78049L6.96966 7.71983L2.68933 12.0002L6.96966 16.2805L8.03032 15.2198Z" fill="#ffffff">
              </path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="cover">
        <div className='left-side'>
          <a href="https://redditstream.netlify.app/" rel="noreferrer" target="_blank" className="project project-tile">
            <img className="project-img" src={reddit} alt=""/>
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>Reddit Stream</h3>
          <p className='project-info'>I developed a React/Redux application that utilizes the Reddit API to provide a comprehensive Reddit browsing experience. The application includes search functionality for Reddit posts, enabling users to easily find content. I implemented features for upvoting and downvoting posts, as well as incorporating commenting capabilities and the ability to read comments. Additionally, the application allows users to view top communities and explore subreddit profiles and posts.</p>
          <a href='https://redditstream.netlify.app/' rel="noreferrer" target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
          <a href='https://github.com/MrYoung6/reddit-stream' rel="noreferrer" target="_blank">
            <button className='code'>Code<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 6.2635L10.4523 18.2635L9.04784 17.7368L13.5478 5.73682L14.9523 6.2635ZM19.1894 12.0001L15.9698 8.78042L17.0304 7.71976L21.3108 12.0001L17.0304 16.2804L15.9698 15.2198L19.1894 12.0001ZM8.03032 15.2198L4.81065 12.0002L8.03032 8.78049L6.96966 7.71983L2.68933 12.0002L6.96966 16.2805L8.03032 15.2198Z" fill="#ffffff">
              </path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="cover">
        <div className='left-side'>
          <a href="https://pulseplay2.netlify.app" rel="noreferrer" target="_blank" className="project project-tile">
            <img className="project-img" src={pulse} alt=""/>
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>Pulse Play</h3>
          <p className='project-info'>Developed a React application that utilized the Spotify API for playlist creation. Implemented search functionality for songs, albums, or artists, enabling users to select desired songs for playlist creation. Additionally, provided the capability to create and manage playlists.</p>
          <a href='https://pulseplay2.netlify.app' rel="noreferrer" target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
          <a href='https://github.com/MrYoung6/pulse-play' rel="noreferrer" target="_blank">
            <button className='code'>Code<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M14.9523 6.2635L10.4523 18.2635L9.04784 17.7368L13.5478 5.73682L14.9523 6.2635ZM19.1894 12.0001L15.9698 8.78042L17.0304 7.71976L21.3108 12.0001L17.0304 16.2804L15.9698 15.2198L19.1894 12.0001ZM8.03032 15.2198L4.81065 12.0002L8.03032 8.78049L6.96966 7.71983L2.68933 12.0002L6.96966 16.2805L8.03032 15.2198Z" fill="#ffffff">
              </path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="cover">
        <div className='left-side'>
          <a href="https://danforthkarate.com" target="_blank" className="project project-tile">
            <img className="project-img" src={karate} alt=''/>
          </a>
        </div>
        <div className='right-side'>
          <h3 className='project-title'>Danforth Karate</h3>
          <p className='project-info'>I developed a website using Webflow(CMS) that allows users to access the karate school schedule. The site includes features for exploring the various programs offered by the karate school, and functionality to view upcoming events. Additionally, it provides information about the karate instructors working at the school.</p>
          <a href='https://danforthkarate.com' rel="noreferrer" target="_blank">
            <button className='live'>Site<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g>
            </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Projects