import React from 'react';
import './resume.css';
import ExperienceTimeLine from './experience_timeline';

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">

      <ExperienceTimeLine />
      
      </div>

      
      
    </section>
  )
}

export default Resume;
