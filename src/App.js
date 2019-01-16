import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import GameDetails from './components/games/GameDetails'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/game/:id' component={GameDetails}/>
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
