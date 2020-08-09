import React from 'react'
import cx from 'classnames'

class Header extends React.Component {
  render() {
    const { onMenuClick, menuOpen, switchRoutes, route, viewMode } = this.props
    return(
      <div className="header-container">
        <div className="title">
          <img src="/pj.ico" onClick={() => switchRoutes("main")}/>
          {
            viewMode !== "tabletSM" && 
              <a onClick={() => switchRoutes("main")}>
                Peter Joe
              </a>
          }
        </div>
        <div className="link-container">
          {
            viewMode === "tabletSM" ?
            <div className={cx({
                "burger-menu": true,
                "cross": menuOpen
              })} 
              onClick={onMenuClick}
            >
              <span className="burger-bar top" />
              <span className="burger-bar middle" />
              <span className="burger-bar bottom" />
            </div>
            :
            <React.Fragment>
              <div className={cx({
                "link-wrapper": true,
                "selected": route === "project"
              })} onClick={() => switchRoutes("project")}
              >
                <a>
                  Projects
                </a>
                <div className="underline"/>
              </div>
              <div className={cx({
                "link-wrapper": true,
                "selected": route === "main"
              })} onClick={() => switchRoutes("main")}
              >
                <a>
                  About Me
                </a>
                <div className="underline"/>
              </div>
            </React.Fragment>
          }
        </div>
      </div>
    )
  }
}

export default Header