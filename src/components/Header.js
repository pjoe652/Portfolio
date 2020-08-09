import React from 'react'
import cx from 'classnames'

class Header extends React.Component {
  render() {
    const { onMenuClick, menuOpen, switchRoutes, route, viewMode } = this.props
    return(
      <div className="header-container">
        <div className="title">
          <img src="/pj.ico" alt="" onClick={() => switchRoutes("main")}/>
          {
            viewMode !== "tabletSM" && 
              <span onClick={() => switchRoutes("main")}>
                Peter Joe
              </span>
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
                <span>
                  Projects
                </span>
                <div className="underline"/>
              </div>
              <div className={cx({
                "link-wrapper": true,
                "selected": route === "main"
              })} onClick={() => switchRoutes("main")}
              >
                <span>
                  About Me
                </span>
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