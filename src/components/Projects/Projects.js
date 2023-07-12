import React from 'react';
import classes from './Projects.module.css';
import bookheap from '../images/shopping-cart-app.png';
import Movie from '../images/Movie-app.png';
import Dashboard from '../images/Dashboard.png';
import Blog from '../images/Blog.png';
import ToDoList from '../images/ToDoList.png';
import Click from '../images/Click.png';
import Stopwatch from '../images/Stopwatch.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://movie-app-parag.vercel.app/',
    title: 'Movie-app',
    desc: 'The Movie App is a ReactJS-based project that allows users to explore and discover movies.It leverages the power of React component-based architecture.',
    image: Movie
  },
  {
    link: 'https://rooba-finance-assignment.vercel.app',
    title: 'DashBoard',
    desc: 'I developed a dynamic dashboard using ReactJS, showcasing my proficiency in front-enddevelopment. The dashboard includes essential components like Pie and Bar Chart, providing users with visual insights.',
    image: Dashboard
  },
  {
    link: 'https://shopping-cart-app-ten.vercel.app/',
    title: 'shopping-cart-app',
    desc: 'The Shopping Cart app is a ReactJS-based project thatenables users to browse and purchase products online. It showcases features like Product Listing,Product Details,Shopping Cart',
    image: bookheap
  },

  {
    link: 'https://blogging-app-delta.vercel.app/',
    title: 'Blogging-app',
    desc: 'The blogging app is built using React.js and utilizes keyconcepts like state and props. It integrates with a Firebase database for data storage and management.',
    image: Blog
  },

  {
    link: 'https://to-do-list-ruby-alpha.vercel.app/',
    title: 'To Do List',
    desc: 'The application provides a user-friendly interface for adding,editing, and deleting tasks, helping users stay organized and productive.',
    image: ToDoList
  },
  {
    link: 'https://stop-watch-project-nu.vercel.app/Html/Stopwatch.html',
    title: 'Stop Watch',
    desc: '',
    image: Stopwatch
  },
  {
    link: 'https://react-dropdown-amber.vercel.app/',
    title: 'Click Event handler',
    desc: '',
    image: Click
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
