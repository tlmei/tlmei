import React from 'react';
import './sidebar.css';
import resume from '../../static/docs/resume.pdf';

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
      </a>
      <nav className="nav">
        <div className="nav__menu">

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-screen-desktop"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href={resume} target="_blank" className="nav__link">
                <i className="icon-doc"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      
    
      <div className="nav__footer">
        <span className="copyright">&copy; 2024 - 2025.</span>
      </div>

    </aside>
  )
}

export default Sidebar;
