import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function Device({device, onToggle}){
  const classes = useStyles();
}

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);




  


export default function CustomizedSlider() {
  const classes = useStyles();
  const [temperature, setTemperature] = useState(25);
  const [huminity, setHuminity] = useState(40);

  const CriticalTemperature = (event, newValue) => {
  /*const [value, setValue] = React.useState(30);
  setValue(newValue);*/
  console.log(newValue);
  console.log(typeof(newValue));
  setTemperature(newValue);
  axios.post('http://192.168.0.55:5000/devices',{'0': newValue, '1': 0}) // 온도를 바꾸면 실행되면서 전달
  .then(function(response){
    console.log(response);
  })
  .catch(function(err){
    console.log(err);
  })
}

const CriticalHumidity = (event, newValue) => {
    /*const [value, setValue] = React.useState(30);
    setValue(newValue);*/
    console.log(newValue);
    console.log(typeof(newValue));
    setHuminity(newValue);
    axios.post('http://192.168.0.55:5000/devices',{'0': 0,'1': newValue}) // 습도를 바꾸면 실행되면서 전달
    .then(function(response){
      console.log(response);
    })
    .catch(function(err){
      console.log(err);
    })
  }

  return (
    <div className={classes.root}>
      
      <Typography gutterBottom>온도</Typography>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={temperature} 
      onChangeCommitted={CriticalTemperature} min={15} max={35}/>
      <Typography gutterBottom>습도</Typography>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={huminity} 
      onChangeCommitted={CriticalHumidity} min={20} max={60}/>
    </div>
  );

  
}



// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Slider from '@material-ui/core/Slider';
// import Typography from '@material-ui/core/Typography';
// import Tooltip from '@material-ui/core/Tooltip';
// import Box from '@material-ui/core/Box';
// import axios from 'axios';




// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 400,
//   },
//   margin: {
//     height: theme.spacing(2),
//   },
// }));



// function ValueLabelComponent(props) {
//   const { children, open, value } = props;

//   return (
//     <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
//       {children}
//     </Tooltip>
//   );
// }


// const CriticalPoint = (event, newValue) => {
//   /*const [value, setValue] = React.useState(30);
//   setValue(newValue);*/
//   console.log(newValue);
//   console.log(typeof(newValue));
//   axios.post('http://192.168.0.55:5000/devices',{'0': newValue})
//   .then(function(response){
//     console.log(response);
//   })
//   .catch(function(err){
//     console.log(err);
//   })
// }


// ValueLabelComponent.propTypes = {
//   children: PropTypes.element.isRequired,
//   open: PropTypes.bool.isRequired,
//   value: PropTypes.number.isRequired,
// };


// const PrettoSlider = withStyles({
//   root: {
//     color: '#52af77',
//     height: 8,
//   },
//   thumb: {
//     height: 12,
//     width: 12,
//     backgroundColor: '#fff',
//     border: '2px solid currentColor',
//     marginTop: -8,
//     marginLeft: -12,
//     '&:focus, &:hover, &$active': {
//       boxShadow: 'inherit',
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: 'calc(-50% - 8px)',
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//   },
// })(Slider);

// export default function CustomizedSlider() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <PrettoSlider 
//         valueLabelDisplay="auto" 
//         aria-label="pretto slider" 
//         defaultValue={25}
//         // orientation="vertical"
//         // min={15}
//         // max={35}
//         valueLabelDisplay="on" 
//         // marginLeft= "200"
//         onChangeCommitted={CriticalPoint}
//       />
//       {/* <Box component="span" m={3}>
//       </Box> */}
//       <PrettoSlider 
//         valueLabelDisplay="auto" 
//         aria-label="pretto slider" 
//         defaultValue={40}
//         // orientation="vertical" 
//         // min={20}
//         // max={60}
//         valueLabelDisplay="on"
//         onChangeCommitted={CriticalPoint}
//       />
//     </div>
//   );
// }