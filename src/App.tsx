import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Button from './app/components/Button/Button';
import Navigation from './app/screens/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  // const hamburger_menu = document.querySelector('.hamburger-menu');
  // const container = document.querySelector('.container');

  useEffect(() => {
    // hamburger_menu?.addEventListener('click', () => {
    //   container?.classList.toggle('active');
    // });
  });

  const toggleClass = () => {
    const container = document.querySelector('.container');
    container?.classList.toggle('active');
  };

  const getStyle = (value: string) => {
    return { '--i': `${value}s` } as React.CSSProperties;
  };

  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <div className='navbar'>
            <div className='menu'>
              <h3 className='logo'>
                <span>S</span>
                <span>c</span>
              </h3>
              <div className='hamburger-menu' onClick={toggleClass}>
                <div className='bar'></div>
              </div>
            </div>
          </div>

          <div className='main-container'>
            <div className='main'>
              <header>
                <div className='overlay'>
                  <Navigation />
                </div>
              </header>
            </div>

            <div className='shadow one'></div>
            <div className='shadow two'></div>
          </div>

          <div className='links'>
            <ul>
              <li onClick={toggleClass}>
                <Link to='/' style={getStyle('0.05')}>
                  Home
                </Link>
              </li>
              <li onClick={toggleClass}>
                <Link to='/about' style={getStyle('0.1')}>
                  About
                </Link>
              </li>
              <li onClick={toggleClass}>
                <Link to='/projects' style={getStyle('0.15')}>
                  Projects
                </Link>
              </li>
              {/* <li>
                <a href='#' style={getStyle('0.2')}>
                  Testimonials
                </a>
              </li>
              <li>
                <a href='#' style={getStyle('0.25')}>
                  About
                </a>
              </li>
              <li>
                <a href='#' style={getStyle('0.3')}>
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
