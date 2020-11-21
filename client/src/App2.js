
import './App.css';
// import Appbar from './container/Header';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeviceCritical from './components/Actuating/DeviceCritical';
import Information from './components/information/Information';
import ChartsPage from './components/graph/GraphMDB'

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
      
      <Container maxWidth="lg">
        <Information/>
        <Container maxWidth="sm">
          <DeviceCritical/>
        </Container>
        <ChartsPage/>
      </Container>
      
    </div>
  );
}

export default App2;


