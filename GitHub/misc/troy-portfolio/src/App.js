import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';

const App = () => {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Home />
      <Resume />
      <Contact />
    </main>
    </>
  )
}

export default App;
