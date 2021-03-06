import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import WaitingVerification from './components/WaitingVerification';
import Verified from './components/Verified';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div>
       <Header navBrand={'Hokage'} />
       <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/waitingverification" component={WaitingVerification} />
            <Route path="/verified" component={Verified} />
            <Route path="/userlist" component={UserList} />
          </div>
      </div>
    );
  }
}

export default App;
