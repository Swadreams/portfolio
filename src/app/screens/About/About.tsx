import React from 'react';
import './AboutStyle.css';

const About = () => {
  return (
    <div className='container-about'>
      <div className='about'>
        <h1>About Me</h1>
        <div className='block-about'>
          <div>
            <p className='paragraph'>
              I am a FrontEnd Developer with a serious passion for the Web and
              Mobile application development.
            </p>
            <p className='paragraph'>
              Well-organised person, problem solver, independent employee with
              high attention to detail.
            </p>
            <p className='paragraph'>
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
            <p className='paragraph'>
              I’m known for being a detail-oriented, well-organized team player.
              I never miss deadlines, I’m a good communicator and I can juggle
              multiple tasks at once.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
