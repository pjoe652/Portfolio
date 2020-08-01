import React from 'react';
import AboutMe from './components/AboutMe';
import ExperienceComponent from './components/ExperienceComponent';
import Header from './components/Header';
import './styles/main.scss';
import Projects from './components/Projects';

class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment >
        <Header />
        <div className="app-container">
          <AboutMe />
          <ExperienceComponent />
          {/* <Projects /> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Portfolio;
