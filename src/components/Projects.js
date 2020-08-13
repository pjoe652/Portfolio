import React from 'react'
import cx from 'classnames'
import { projects } from '../constants/projects'
import { Tablet, TabletLand } from '../constants/screenWidth'
import YouTube from 'react-youtube';
import { lockScroll, unlockScroll } from '../helpers/screenLock';

const YoutubeOpts = {
  height: '100%',
  width: '100%',
}

class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      displayProjects: [],
      openModal: false,
      activeProject: null,
      mounted: false
    }
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.updateProjectRow)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateProjectRow)
    window.removeEventListener("load", this.removeLoad);
  }

  componentDidMount() {
    this.updateProjectRow()
    document.body.classList.add('loading');
    window.addEventListener("load", this.removeLoad);
    window.requestAnimationFrame(() => this.setState({ mounted: true }));
  }

  removeLoad() {
    document.body.classList.remove('loading');
  }

  selectProject = (name) => {
    const selectedProject = projects.filter(project => project.title === name)[0]
    lockScroll()

    this.setState({
      openModal: true,
      activeProject: selectedProject
    })
  }

  closeModal = () => {
    unlockScroll()
    this.setState({
      openModal: false,
      activeProject: null
    })
  }

  updateProjectRow = () => {
    let itemsPerRow = 3
    let tempColumnItems = []
    let tempArray = []

    if (window.innerWidth < Tablet) {
      itemsPerRow = 1
    } else if (window.innerWidth < TabletLand) {
      itemsPerRow = 2
    }

    projects.forEach(project => {
      project.empty = false
      tempArray.push(project)
      if (tempArray.length === itemsPerRow) {
        tempColumnItems.push(tempArray)
        tempArray = []
      }
    })

    while (tempArray.length < itemsPerRow) {
      tempArray.push({empty: true})
    }

    tempColumnItems.push(tempArray)

    this.setState({
      displayProjects: tempColumnItems
    })
  }

  render() {
    const { openModal, activeProject, mounted, displayProjects } = this.state

    return(
      <div className="projects-container">
        <div className={cx({
          "modal-escape": true,
          "hidden": !openModal
        })} onClick={this.closeModal}/>
        <div className={cx({
          "modal-container": true,
          "hidden": !openModal
        })}>
          {
            activeProject && 
            <React.Fragment>
              <div className="description">
                <div className="description-header">
                  <span className="title">
                    {activeProject.title}
                  </span>
                  <a href={activeProject.repo}>
                    <i class="fab fa-github-square" />
                  </a>
                </div>
                <div className="skills">
                  Related Skills:
                  {
                    activeProject.skills.map(skill => 
                      <span>
                        {` ${skill}`}
                      </span>
                    )
                  }
                </div>
                <span className="main">
                  {activeProject.description}
                </span>
              </div>
              <div className="rhs-wrapper">
                {
                  activeProject.video 
                    ?  <YouTube opts={YoutubeOpts} videoId={activeProject.video} />
                    :  <img src={activeProject.image} alt=""/>
                }
              </div>
            </React.Fragment>
          }
        </div>
        {
          displayProjects.map((row, i) => {
            return(
              <div className="project-wrapper-row">
                {
                  row.map((project, j) => {
                    return(
                      <div className={cx({
                        "project-wrapper": true,
                        "active": mounted
                      })} style={{ '--delay': `0.${(i * row.length) + j + 1}s`}}>
                        <span className="title">
                          {project.title}
                        </span>
                        {
                          !project.empty &&  
                            <div className="image-container" onClick={() => this.selectProject(project.title)}>
                              <img src={project.image} alt=""/>
                              <i class="find-out fas fa-search" />
                            </div>
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Projects