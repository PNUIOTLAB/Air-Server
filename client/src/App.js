import logo from './logo.svg';
import './App.css';
import Menu from './container/Menu';
// import Appbar from './container/Header';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useRequest from './hook/useRequest';
import DeviceCritical from './components/Actuating/DeviceCritical';
import Information from './components/information/Information';
import Paper from '@material-ui/core/Paper';
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

function App() {
  const classes = useStyles();
  
  
  return (
    <div className={classes.root}>
      
      <Container maxWidth="sm">
        <Information/>
        <DeviceCritical/>
      {/* <Grid container direction="column" justify="center" alignItems="center" >
      </Container>  
      </Grid> */}
        
      {/* </Container>
      <Container maxWidth="lg"> */}
        
      </Container>
      <ChartsPage/>
    </div>
  );
}

export default App;


// import React from 'react';
// import useRequest from './hooks/useRequest';

// const Post = () => {
//   const [response, loading, error] = useRequest(
//     'https://jsonplaceholder.typicode.com/posts/1','post',function(){console.log("complete")},
//      {ROOM:101}
//   );

//   if (loading) {
//     return <div>로딩중..</div>;
//   }

//   if (error) {
//     return <div>에러 발생!</div>;
//   }

//   /*
//     컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
//     loading 이 false 이면서 response 도 null 이기에
//     response null 체킹 필요 
//   */
//   if (!response) return null;

//   const { title, body } = response.data;

//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{body}</p>
//     </div>
//   );
// };

// export default Post;
