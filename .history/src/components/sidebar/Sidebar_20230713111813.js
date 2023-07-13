import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/parag.jpg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div style={{ color: 'black', fontWeight: 'bold' }} className='tagtop'>
          # Frontend_Web Developer
        </div>
        <div style={{ color: 'black', fontWeight: 'bold' }} className=''>
          # React JS
        </div>

        <h1>
          <Link smooth to='/#start' className='h1_links'>
            Parag Chauhan
          </Link>
        </h1>

        <img alt="Profile_picture" src={logo} />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a 
            href='https://mail.google.com/mail/u/0/#inbox'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
            
          >paragchauhan33@gmail.com</a>
          
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
            Professionl Experience
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#education' className='links'>
              Training
            </Link>
          </li>  
          </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/parag-Chauhann'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ><img className='social-icon' alt="github" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-256.png"/></a>

              <a
                href='https://www.linkedin.com/in/parag-chauhan-4445ba155/'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-linkedin fa-lg'
              ><img className='social-icon' alt="linkedinhub" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"/></a>

              <a
                href='mailto:paragchauhan33@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ><img className='social-icon' alt="linkedinhub" src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png"/></a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
