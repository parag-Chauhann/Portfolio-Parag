import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id='interest'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <h2 className={classes.heading}>Professional Experience</h2>
          <div className={classes.Interest}>
            <ScrollAnimation
              offset={0}
              animateIn='fadeInLeft'
              duration={2.4}
              animateOnce={true}
              initiallyVisible={true}
            >
              <div className={classes.web}>
                <h2>TSM TheSafetyMaster Private Limited | Gurugram</h2>
                  <h3>Assistant Manager- Technical</h3>
                  <h5>August 2021-March 2023</h5>
                <p>
                Experienced safety consultant
providing comprehensive training andconducting studies to promote safety in various domains. Specialized inareas such as fire safety, human safety, behavior-based safety (BBS), andconducting hazard identification studies, including HAZOP (Hazard andOperability) studies. Proficient in implementing safety measures incompliance with relevant standards, including IS (Indian Standards).
                </p>
              </div>
            </ScrollAnimation>

          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Interest;
