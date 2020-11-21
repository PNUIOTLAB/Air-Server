import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import Header from './container/Header'
import useRequest from './hook/useRequest'
import reportWebVitals from './reportWebVitals';
import Request from './components/Request'
import { BrowserRouter , Switch, Route, Redirect,Router } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <Router>
        <Route path="/101" component={App}/>
        <Route path="/102" component={App2}/>
        <Route path="/103" component={App3}/>
      </Router>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
