import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="header-container">
        <div className="title">
          <a>
            Peter Joe
          </a>
        </div>
        <div className="link-container">
          <div className="link-wrapper">
            <a>
              Experience
            </a>
            <div className="underline"/>
          </div>
          <div className="link-wrapper">
            <a href="https://www.linkedin.com/in/peter-joe-17673b186/">
              LinkedIn
            </a>
            <div className="underline"/>
          </div>
          <div className="link-wrapper">
            <a href="https://github.com/pjoe652">
              Github
            </a>
            <div className="underline"/>
          </div>
          <div className="link-wrapper">
            <a>
              About Me
            </a>
            <div className="underline"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header