import React from 'react'

class ExperienceComponent extends React.Component {
  render() {
    return (
      <div className="experience-container">
        <div className="workplace-container"> 
          <div className="experience-wrapper">
            <div className="time-header">
              <span>October 2018</span>
              <div className="arrow" />
            </div>
            <span className="company">
              University of Auckland
            </span>
            Summer Researcher
          </div>
          <div className="experience-wrapper">
            <div className="time-header">
              November 2018
              <div className="arrow" />
            </div>
            <span className="company">
              E-Merge Data Solutions
            </span>
            Intern
          </div>
          <div className="experience-wrapper">
            <div className="time-header">
              February 2019
              <div className="arrow" />
            </div>
            <span className="company">
              University of Auckland
            </span>
            Summer Researcher
          </div>
          <div className="experience-wrapper">
            <div className="time-header">
              November 2019
            </div>
            <span className="company">
              Perpetual Guardian
            </span>
            Junior Analyst Programmer
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceComponent