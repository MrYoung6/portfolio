import React,{useEffect} from 'react'
import './Header.css'

function Header() {

useEffect(() => {
  const menu = document.querySelector('.menu');
  const navList = document.querySelector('#navbar .nav-list');

  const handleMenuClick = () => {
    console.log('Menu Clicked!');
    navList.classList.toggle('active');
    console.log('navList class list:', navList.classList);
    console.log(menu);
    console.log(navList);
  };

  if (menu && navList) {
  menu.addEventListener('click', handleMenuClick);
  console.log('Event listener added to menu');
  } else {
    console.log('Menu or navList not found');
  }

  return () => {
    if(menu) {
    menu.removeEventListener('click', handleMenuClick);
    }
  };
}, [])


  return (
<div className="header">
      <h2 className="title">Portfolio</h2>
      <nav id="navbar">
        <a href="#" className="menu">
          <i className="fa-solid fa-bars"/>
        </a>
        <div className="nav-list">
          <ul>
            <li>
              <a href='#skills'>About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header