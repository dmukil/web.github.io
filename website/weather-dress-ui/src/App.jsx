
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import { Layout } from './components/Layout';
import Home from './components/Home/Home';
import Account from './components/Account/Account';
import Signup from './components/Account/Signup';
import Contact from './components/Contact/Contact';
import Help from './components/Help/Help';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <div className="container">
            <Switch>
                  <Route path="/home" exact component={Home} />
                  <Route path="/account" exact component={Account} />
                  <Route path="/account/signup" component={Signup} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/help" component={Help} />

                  <Redirect to="/home" />
              </Switch>
          </div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
