import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <div
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>Parag Chauhan</b> I completed my degree in Bachelor of Technology in Electrical Engineering from Seth Jai Prakash Mukand Lal Institute of Engineering & Technology.
              I have 1.7 years of experience in the field of security consulting and I have completed 8 months online training in Front end web development from Coding Ninja.
              I have amazing knowledge and HTML, CSS, React JS
              I am much interested in
              developing new things which excite me a lot. :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
