import React from 'react';
import AboutMe from './components/AboutMe';
import ExperienceComponent from './components/ExperienceComponent';
import Header from './components/Header';
import './styles/main.scss';
import Projects from './components/Projects';
import { TabletLand, Phone, Tablet } from './constants/screenWidth';
import Menu from './components/Menu';
import { lockScroll, unlockScroll } from './helpers/screenLock';

class Portfolio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      route: "main",
      viewMode: "desktop",
      menuOpen: false
    }
  }

  componentDidMount() {
    this.updateViewMode()
    window.addEventListener('resize', this.updateViewMode)
  }

  updateViewMode = () => {
    if (window.innerWidth < Tablet) {
      this.setState({
        viewMode: "tabletSM"
      })

    } else if (window.innerWidth < TabletLand) {
      this.setState({
        viewMode: "tablet",
        menuOpen: false
      })
      unlockScroll()
    } else {
      this.setState({
        viewMode: "desktop",
        menuOpen: false
      })
      unlockScroll()
    }
  }

  switchRoutes = (route) => {
    unlockScroll()
    this.setState({
      route: route,
      menuOpen: false
    })
  }

  onMenuClick = () => {
    const { menuOpen } = this.state

    if(menuOpen) {
      unlockScroll()
    } else {
      lockScroll()
    }

    this.setState({
      menuOpen: !menuOpen
    })
  }

  render() {
    const { menuOpen, route, viewMode } = this.state

    return ( 
      <React.Fragment >
        <Header switchRoutes={this.switchRoutes} route={route} viewMode={viewMode} menuOpen={menuOpen} onMenuClick={this.onMenuClick}/>
        <div className="app-container">
          <Menu switchRoutes={this.switchRoutes} menuOpen={menuOpen} route={route}/>
          {
            route === "main" ? 
              <React.Fragment>
                <AboutMe viewMode={viewMode}/>
                <ExperienceComponent />
              </React.Fragment>
            :
              <Projects />
          }
          
        </div>
      </React.Fragment>
    )
  }
}

export default Portfolio;
