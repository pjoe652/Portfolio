import React from 'react';
import logo from './logo.svg';
import './styles/main.scss'
import Header from './components/Header';
import ExperienceComponent from './components/ExperienceComponent';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <ExperienceComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Portfolio;
