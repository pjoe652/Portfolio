import React from 'react';
import logo from './logo.svg';
import './styles/main.scss'
import Header from './components/Header';
import ExperienceComponent from './components/ExperienceComponent';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';

class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment >
        <Header />
        <div className="app-container">
          
          <AboutMe />
          <ExperienceComponent />
        </div>
      </React.Fragment>
    )
  }
}

export default Portfolio;
