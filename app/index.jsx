import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Search from './Search.jsx';


render((
  <Router history={browserHistory}>
    <Route path="/" component={Search}/>
  </Router>
), document.getElementById('app'))