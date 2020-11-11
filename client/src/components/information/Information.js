import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Cloud from '@material-ui/icons/Cloud';
import axios from "axios"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DevicesIcon from '@material-ui/icons/Devices';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    root: {
      flexGrow: 0,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    margin: {
      margin: theme.spacing(1)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();
    
    const [temperature, setTemperature] = useState(0);
    const [huminity, setHuminity] = useState(0);
    const [finedust, setFinedust] = useState(0);
    const [ufinedust, setUfinedust] = useState(0);
    const [gas, setGas] = useState(0);
    const [device1, setDevice1] = useState(0); // on off를 나타낼 0 or 1
    const [device2, setDevice2] = useState(0);
    const [device3, setDevice3] = useState(0);
    const [device4, setDevice4] = useState(0);
    const [device5, setDevice5] = useState(0);
    const [device6, setDevice6] = useState(0);

    const ManualControl = (event, newValue) => {
        /*const [value, setValue] = React.useState(30);
        setValue(newValue);*/
        console.log(newValue);
        console.log(typeof(newValue));
        axios.post('http://192.168.0.55:5000/devices',{'0': newValue})
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        })
      }

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://192.168.0.55:5000/room/102').then(res => {
                console.log(res);
                setTemperature(res.data.temperature);
                setHuminity(res.data.huminity);
                setFinedust(res.data.finedust);
                setUfinedust(res.data.ufinedust);
                setGas(res.data.co2);
                setDevice1(res.data.device1); // device1 ? on : off 
                setDevice2(res.data.device2);
                setDevice3(res.data.device3);
                setDevice4(res.data.device3);
                setDevice5(res.data.device3);
                setDevice6(res.data.device3);
            });
        }, 5000);
        return() =>clearInterval(interval);
    }, [temperature, huminity, finedust, ufinedust, gas]);
  
    return (
            <Timeline >
                
                    <TimelineItem>
                        <Grid item xs={3}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    온도
                                </Typography>
                            </TimelineOppositeContent>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        </Grid>
                        <Grid item xs={6}>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {temperature}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </Grid>
                    </TimelineItem>
                
                    <TimelineItem>
                        <Grid item xs={3}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    습도
                                </Typography>
                            </TimelineOppositeContent>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <Cloud />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        </Grid>
                        <Grid item xs={6}>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {huminity}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </Grid>
                    </TimelineItem>
                
                    <TimelineItem>
                        <Grid item xs={3}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    미세먼지
                                </Typography>
                            </TimelineOppositeContent>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        </Grid>
                        <Grid item xs={6}>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {finedust}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </Grid>
                    </TimelineItem>
                
                    <TimelineItem>
                        <Grid item xs={3}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    초미세먼지
                                </Typography>
                            </TimelineOppositeContent>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        </Grid>
                        <Grid item xs={6}>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {ufinedust}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </Grid>
                    </TimelineItem>
                
                    <TimelineItem>
                        <Grid item xs={3}>
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    가스
                                </Typography>
                            </TimelineOppositeContent>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        </Grid>
                        <Grid item xs={6}>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {gas}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </Grid>
                    </TimelineItem>
                    <div>
            <IconButton aria-label="favorite">

                <DevicesIcon 
                    fontSize="large"
                    variant="contained"
                 />
            </IconButton>
                    </div>
            </Timeline>
    );
}