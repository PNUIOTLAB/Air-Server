import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './container/Header'
import useRequest from './hook/useRequest'
import reportWebVitals from './reportWebVitals';
import Request from './components/Request'
import { BrowserRouter , Switch, Route, Redirect,Router } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Header/>
      <App />
      {/* <Request/> */}
      <Switch>
        {/* <Route exact path='' component={}/>
        <Route exact path='' component={}/> */}
        {/* <Route exact path='/' component={App}/>  */}
      
      </Switch>  
      
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
