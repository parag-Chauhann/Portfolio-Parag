import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
// import { GoProject } from 'react-icons/go';
// import { FaArrowCircleDown } from 'react-icons/fa';

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png" alt='myImage' />

          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src="https://res.cloudinary.com/practicaldev/image/fetch/s--qa72YNaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/me6sbpz893h3a6ip5zsv.jpg" alt='myImage' />
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
