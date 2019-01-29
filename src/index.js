import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Finish from './components/Finish';
import Header from './components/Header';
import Schedule from './components/Schedule';
import Train from './components/Train';
import Preferences from './components/Preferences';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/preferences" component={Preferences} />
      <Route path="/train" component={Train} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/finish" component={Finish} />
    </div>
  </BrowserRouter>
  , document.getElementById('root')
);
