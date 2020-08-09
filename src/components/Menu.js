import React from 'react'
import cx from 'classnames'

class Menu extends React.Component {
  render() {
    const { switchRoutes, menuOpen, route } = this.props

    return(
      <div className={cx({
        "menu-container": true,
        "closed": !menuOpen
      })}>
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
      </div> 
    )
  }
}

export default Menu