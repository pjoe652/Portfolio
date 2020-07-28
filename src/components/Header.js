import React from 'react'

class Header extends React.Component {
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