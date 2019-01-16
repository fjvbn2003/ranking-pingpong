import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import GameDetails from './components/games/GameDetails'
import SignIn from './components/auth/SignIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/game/:id' component={GameDetails}/>
            <Route path='/signin' component={SignIn}/>
            
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
