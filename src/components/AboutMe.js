import cx from 'classnames'
import React from 'react'
import { skills } from '../constants/skills'

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      exposeMoreAboutMe: false,
      mounted: false
    }
  }

  componentDidMount() {
    window.requestAnimationFrame(() => this.setState({ mounted: true }));
  }

  onExpandMoreClick = () => {
    this.setState({
      exposeMoreAboutMe: true
    })
  }

  render() {
    const { exposeMoreAboutMe, mounted } = this.state
    const { viewMode } = this.props

    return(
      <div className={cx({
        "about-me-container": true,
        "expanded": exposeMoreAboutMe
      })}>
        <div className={cx({
            "intro-container": true,
            "active": mounted
          })}
        >
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
            {
              viewMode === "desktop" &&
                <div className={cx({
                    "expand-button-wrapper": true,
                    "slide-out": exposeMoreAboutMe
                  })}
                  onClick={this.onExpandMoreClick}
                >
                  <i className="fas fa-chevron-right"/>
                </div>
            }
          </div>
          <div className="links">
            <a href="https://www.linkedin.com/in/peter-joe-17673b186/">
             <i class="fab fa-linkedin" />
            </a>
            <a href="https://github.com/pjoe652">
              <i class="fab fa-github-square" />
            </a>
            <a href="mailto: p.joe97@hotmail.com">
              <i class="fas fa-envelope-square" />
            </a>
          </div>
          {
              viewMode !== "desktop" &&
                <div className={cx({
                    "expand-button-wrapper": true,
                    "slide-down": exposeMoreAboutMe
                  })}
                  onClick={this.onExpandMoreClick}
                >
                  <i className="fas fa-chevron-down"/>
                </div>
            }
        </div>
        <div className="expanded-container">
          <div className={cx({
            "expanded-intro-container": true,
            "slide-in": exposeMoreAboutMe && viewMode === "desktop",
            "slide-down": exposeMoreAboutMe && viewMode !== "desktop"
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