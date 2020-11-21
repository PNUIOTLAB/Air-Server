
import './App.css';
// import Appbar from './container/Header';
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeviceCritical3 from './components/Actuating/DeviceCritical3';
import Information3 from './components/information/Information3';
import ChartsPage3 from './components/graph/GraphMDB3'
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

function App3() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
     <Header/>
      <Container maxWidth="md">
        <Information3/>       
      </Container>
      <Container maxWidth="sm">
        <DeviceCritical3/> 
      </Container>
      <Container maxWidth="xl">
        <ChartsPage3/>
      </Container>
      
    </div>
  );
}

export default withRouter(App3);


