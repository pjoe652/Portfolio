import React from 'react'
import uoa from '../uoa_color.png'
import emerge from '../emerge.png'
import pg from '../pg.png'

class ExperienceComponent extends React.Component {
  render() {
    return (
      <div className="experience-container">
        <div className="timeline">
          <div className="timeline-bar">
            <a className="timeline-point" />
            <a className="timeline-line" />
            <a className="timeline-point" />
          </div>
          <div className="position-container"> 
            <div className="timeline-position">
              <a className="joint" />
              <div className="company">
                <img src={uoa} id="uoa"/>
              </div>
            </div>
            <div className="timeline-position">
              <a className="joint" />
              <div className="company">
                <img src={emerge}/>
              </div>
            </div>
            <div className="timeline-position">
              <a className="joint" />
              <div className="company">
                <img src={pg}/>
              </div>
            </div>
          </div>
        </div>
        <div className="workplace-container"> 
          <div className="experience-wrapper">
            <span className="date">
              October 2018
            </span>
            <span className="company">
              University of Auckland
            </span>
            Summer Researcher
          </div>
          <div className="experience-wrapper">
            <span className="date">
              November 2018
            </span>
            <span className="company">
              E-Merge Data Solutions
            </span>
            Intern
          </div>
          <div className="experience-wrapper">
            <span className="date">
              November 2019
            </span>
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