
import './App.css';
// import Appbar from './container/Header';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeviceCritical from './components/Actuating/DeviceCritical';
import Information from './components/information/Information';
import ChartsPage from './components/graph/GraphMDB';
import {withRouter} from 'react-router-dom';
import Header from './container/Header';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root}>
      <Header/>
      <Container maxWidth="md">
        <Information/>       
      </Container>
      <Container maxWidth="sm">
        <DeviceCritical/> 
      </Container>
      <Container maxWidth="xl">
        <ChartsPage/>
      </Container>
    </div>
  );
}

export default withRouter(App);


