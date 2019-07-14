import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage.js';
import MobileHomepage from './Mobile/MobileHomepage.js';
import Stor from './Components/Stor.js';
import MobileStor from './Mobile/MobileStor.js';
import Contact from './Components/Contact.js';
// import Checkout from './Components/Checkout.js';
import {Route, BrowserRouter, Switch } from "react-router-dom";
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={813} />;
const Mobile = props => <Responsive {...props} maxWidth={812} />;

class App extends Component {
  render() {
    return (
    <div>
    <Desktop>
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/Stor" exact component={Stor}/>
          <Route path="/Contact" exact component={Contact}/>
        </Switch>
      </BrowserRouter>
    </div>
    </Desktop>
    <Mobile>
      <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MobileHomepage}/>
          <Route path="/Stor" exact component={MobileStor}/>
        </Switch>
      </BrowserRouter>
      </div>
    </Mobile>
    </div>
    );
  }
}

export default App;
