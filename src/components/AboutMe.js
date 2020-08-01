import React from 'react'
import cx from 'classnames'
import { skills } from '../constants/skills'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      exposeMoreAboutMe: false
    }
  }

  onExpandMoreClick = () => {
    this.setState({
      exposeMoreAboutMe: true
    })

    console.log("Clicked")
  }

  render() {
    const { exposeMoreAboutMe } = this.state

    return(
      <div className="about-me-container">
        <div className="intro-container">
          <div className="main-header-container">
            <div className="headers">
              <span className="title">
                Hi, I'm Peter Joe.
              </span>
              <br/>
              <span className="sub-title">
                I'm a full-stack web developer.
              </span>
            </div>
            <div className={cx({
                "expand-button-wrapper": true,
                "slide-out": exposeMoreAboutMe
              })}
              onClick={this.onExpandMoreClick}
            >
              <i class="fas fa-chevron-right"/>
            </div>
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/peter-joe-17673b186/">
             <i class="fab fa-linkedin" />
            </a>
            <a href="https://github.com/pjoe652">
              <i class="fab fa-github-square" />
            </a>
          </div>
        </div>
        <div className="expanded-container">
          <div className={cx({
            "intro-container": true,
            "slide-in": exposeMoreAboutMe
          })}>
            <div className="intro">
              I'm a (soon-to-become) graduate of the University of Auckland. I studied Computer Systems Engineering and somehow came to doing web development.
            </div>
            <div className="skill-level-container">
            {
              skills.map(skill => {
                return(
                  <div className="skill-container">
                    <span className="skill-name">
                      { skill.skill }
                    </span>
                    <div className="bar">
                      <div className="filled" style={{width: `${exposeMoreAboutMe ? skill.percentage[0] : 0}%`}}/>
                      <div className="unfilled" style={{width: `${exposeMoreAboutMe ? skill.percentage[1] : 0}%`}}/>
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe