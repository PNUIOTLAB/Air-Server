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

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();
    
    const [temperature, setTemperature] = useState(0);
    const [huminity, setHuminity] = useState(0);
    const [finedust, setFinedust] = useState(0);
    const [ufinedust, setUfinedust] = useState(0);
    const [gas, setGas] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://192.168.0.55:5000/room/102').then(res => {
                setTemperature(res.data.temperature);
                setHuminity(res.data.huminity);
                setFinedust(res.data.finedust);
                setUfinedust(res.data.ufinedust);
                setGas(res.data.co2);
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
               
            </Timeline>
    );
}