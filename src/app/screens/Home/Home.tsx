import React from 'react';
import Button from '../../components/Button/Button';
import './HomeStyle.css';

const Home = () => {
  return (
    <div className='container-home'>
      <div className='inner'>
        <h1 className='title'>Swapnil Chute</h1>
        {/* <h3>स्वप्निल चुटे </h3> */}
        <h3 className='subtitle'>Software Engineer</h3>
        {/* <button className='btn'>Read more</button> */}
        <Button title='Know More About Me' />
      </div>
    </div>
  );
};

export default Home;
