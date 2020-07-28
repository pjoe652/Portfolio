import React from 'react';
import AboutMe from './components/AboutMe';
import ExperienceComponent from './components/ExperienceComponent';
import Header from './components/Header';
import './styles/main.scss';

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
