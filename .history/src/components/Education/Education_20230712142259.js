import 'animate.css/animate.min.css';
import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Education.module.css';
// import { MdSchool } from 'react-icons/md';
// import { MdWork } from 'react-icons/md';
// import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>TRAINING</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          {/* <MdWork /> */}
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Coding ninjas <span>8 months</span>
                          </h2>
                          <p>
                          Completed online Training of 8 months for Frontend Web Development from Coding Ninjas
                          <br />
                          Gained knowledge of HTML, CSS, JavaScript, React JS, Redux, GIT, Java, Web development,debugging, responsive design, Bootstrap, Responsive frameworks like Grid, Flexbox, or CSS Grid.etc. 
                          <br />
                          <p>Gained the Certificate of completion REACTJS <a href='https://certificate.codingninjas.com/view/3a69701e111fb642'><p>Click-here</p></a></p>
                          <br /> 
                          Career Camp | Front End | Full Stack Web Development <a href="https://certificate.codingninjas.com/view/9e5284d8e53ef0b1"><p>Click-here</p></a>
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    
                    

                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
