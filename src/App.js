import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Lando from './Landing';
import SignUp from './SignUp';
import DashAdm from './DashAdm';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={DashAdm}/>
            <Route path='/Landing' component={Lando}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='./DashAdm' component={DashAdm}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
