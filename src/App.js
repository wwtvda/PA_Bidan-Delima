import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Lando from './Landing';
import SignUp from './SignUp';
import dAdm from './Page/admin/dash_adm';
import UserSet from './Page/admin/userSet'

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path='/' component={Lando}/>
            <Route path='/Landing' component={Lando}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/dAdm' component={dAdm}/>
            <Route path='/AdmUsr' component={UserSet}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
