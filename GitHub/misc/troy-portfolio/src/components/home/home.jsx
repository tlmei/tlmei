import React from 'react';
import './home.css';
import ProfilePicture from '../../static/images/profile_picture.png';
import DownScroll from './down_scroll';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={ProfilePicture} alt="" className="home__img" />
        <h1 className="home__name">Troy Mei</h1>
        {/* <span className="home_education"></span> */}
        <a href="#contact" className="btn">Contact Me</a>
        <DownScroll />
      </div>
      {/* <Shapes /> */}
    </section>
  )
}

export default Home;
