
import './App.css';
// import Appbar from './container/Header';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeviceCritical2 from './components/Actuating/DeviceCritical2';
import Information2 from './components/information/Information2';
import ChartsPage2 from './components/graph/GraphMDB2';
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

function App2() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Header/>
      <Container maxWidth="md">
        <Information2/>       
      </Container>
      <Container maxWidth="sm">
        <DeviceCritical2/> 
      </Container>
      <Container maxWidth="xl">
        <ChartsPage2/>
      </Container>
      
    </div>
  );
}

export default withRouter(App2);


