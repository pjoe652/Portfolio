import React from 'react'
import { experience } from '../constants/experience'

class ExperienceComponent extends React.Component {
  render() {
    return (
      <div className="experience-container">
        <div className="title-wrapper">
          <span className="work-experience-title">
            Work Experience Timeline
          </span>
          <div className="underline"/>
        </div>
        <div className="workplace-container"> 
        {
          experience.map((job, i) => {
            return(
              <div className="experience-wrapper">
                <div className="time-header">
                  <span className="time">
                    {job.timeStarted}
                  </span>
                  {
                    i !== experience.length - 1 && <div className="arrow" />
                  }
                </div>
                <span className="company">
                  {job.company}
                </span>
                {job.position}
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default ExperienceComponent