import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceTimeLine = () => {
  return (
    <VerticalTimeline>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<i class="fa-solid fa-graduation-cap" />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement> */}


      {/* Pershing Experience */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2021 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Pershing</h3>
        <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>

      {/* NYU */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">New York University</h3>
        <h4 className="vertical-timeline-element-subtitle">Computer Science, B.S.</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>

      {/* BNY Mellon Experience */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Summer 2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">BNY Mellon</h3>
        <h4 className="vertical-timeline-element-subtitle">Full Stack Engineering Intern</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>

      {/* Payfone Experience */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Summer 2019"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Prove Identity</h3>
        <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
        <p>
          
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
  )
}

export default ExperienceTimeLine;
