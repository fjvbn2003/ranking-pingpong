import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import GameDetails from './components/games/GameDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateGame from './components/games/CreateGame';
import Histroy from './components/history/History'
import Profile from './components/profile/Profile';

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
            <Route path='/signup' component={SignUp}/>
            <Route path='/create' component={CreateGame}/>
            <Route exact path='/history' component={Histroy}/>
            <Route path='/history/:id' component={Histroy}/>
            <Route path='/profile' component={Profile}/>  
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
