import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

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
    <div className='App'>
      <div className='container'>
        <div className='navbar'>
          <div className='menu'>
            <h3 className='logo'>
              Brand<span>Name</span>
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
                <div className='inner'>
                  <h2 className='title'>Future is here</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium illum tenetur consequatur veritatis?
                  </p>
                  <button className='btn'>Read more</button>
                </div>
              </div>
            </header>
          </div>

          <div className='shadow one'></div>
          <div className='shadow two'></div>
        </div>

        <div className='links'>
          <ul>
            <li onClick={toggleClass}>
              <a href='#' style={getStyle('0.05')}>
                Home
              </a>
            </li>
            <li onClick={toggleClass}>
              <a href='#' style={getStyle('0.1')}>
                Services
              </a>
            </li>
            <li>
              <a href='#' style={getStyle('0.15')}>
                Portfolio
              </a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
