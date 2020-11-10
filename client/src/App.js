import logo from './logo.svg';
import './App.css';
import Menu from './container/Menu';
import Appbar from './container/Appbar';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Appbar position="static"/>
      <Grid container className={classes.root} spacing={3}>
      </Grid>
    </div>
  );
}

export default App;
