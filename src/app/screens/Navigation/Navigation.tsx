import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';

const Navigation = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
    </Switch>
  );
};

export default Navigation;
