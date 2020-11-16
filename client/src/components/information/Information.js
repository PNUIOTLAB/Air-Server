import React, {useState, useEffect} from 'react';
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Cloud from '@material-ui/icons/Cloud';
import axios from "axios"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DevicesIcon from '@material-ui/icons/Devices';
import TempImg from './image/TemperatureImg.svg';
import DustImg from './image/Dust.svg';
import GasImg from './image/Gas.png';

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

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#11cb5f'
        },
        secondary: {
            main: '#aa00ff'
        },
        error: {
            main: '#e53935'
        },
        text: {
            primary: '#1de9b6',
            secondary: '#00e676',
            disabled: '#ff6f00',
            hint: '#673ab7',
            myTextColor: '#fdd835'
        }
    }
})

export default function CustomizedTimeline() {
    const classes = useStyles();
    
    const [temperature, setTemperature] = useState(0);
    const [huminity, setHuminity] = useState(0);
    const [finedust, setFinedust] = useState(0);
    const [ufinedust, setUfinedust] = useState(0);
    const [gas, setGas] = useState(0);
    const [device1, setDevice1] = useState(false);
    const [device2, setDevice2] = useState(false);
    const [device3, setDevice3] = useState(false);
    const [device4, setDevice4] = useState(false);
    const [device5, setDevice5] = useState(false);
    const [device6, setDevice6] = useState(false);
    const [temp_hope, setTemp_hope] = useState(15);
    const [hum_hope, setHum_hope] = useState(40);

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://192.168.0.55:5000/room/102').then(res => {
                setTemperature(res.data.temperature);
                setHuminity(res.data.huminity);
                setFinedust(res.data.finedust);
                setUfinedust(res.data.ufinedust);
                setGas(res.data.co2);
                setDevice1(res.data.device1);
                setDevice2(res.data.device2);
                setDevice3(res.data.device3);
                setDevice4(res.data.device4);
                setDevice5(res.data.device5);
                setDevice6(res.data.device6);
                setTemp_hope(res.data.temp_hope);
                setHum_hope(res.data.hum_hope);
            });
        }, 5000);
        return() =>clearInterval(interval);
    }, [temperature, huminity, finedust, ufinedust, gas, device1, device2, device3, device4, device5, device6]);
  
    const onToggle1 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': !device1,
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice1(!device1);
    };
    const onToggle2 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': null,
            '1': !device2,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice2(!device2);
    };
    const onToggle3 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': null,
            '1': null,
            '2': !device3,
            '3': null,
            '4': null,
            '5': null,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice3(!device3);
    };
    const onToggle4 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': !device4,
            '4': null,
            '5': null,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice4(!device4);
    };
    const onToggle5 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': null,
            '4': !device5,
            '5': null,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice5(!device5);
    };
    const onToggle6 = () => {
        
        axios.post('http://192.168.0.55:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': !device6,
            '6': 103
        }
        ).then(function(response){
            console.log(response);
        });
        setDevice6(!device6);
    };

    return (
        <div>
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={10}>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle1()}
                    color={device1 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle2()}
                    color={device2 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                </Grid>
                <Grid item xs={10}>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle3()}
                    color={device3 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle4()}
                    color={device4 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                </Grid>
                <Grid item xs={10}>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle5()}
                    color={device5 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="favorite"
                    className={classes.margin}
                    onClick={() => onToggle6()}
                    color={device6 ? "secondary" : "default"}
                    >
                    <DevicesIcon fontSize="large" />
                </IconButton>
                </Grid>
            </Grid>
            <Timeline >
                
                    <TimelineItem theme={theme}>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    온도
                                </Typography>
                            </TimelineOppositeContent>
                        
                        
                            <TimelineSeparator>
                                <TimelineDot color="secondary" variant="outlined">
                                    <img src={TempImg} width='25' height='25' />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                       
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {temperature} / {temp_hope}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        
                    </TimelineItem>
                
                    <TimelineItem>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    습도
                                </Typography>
                            </TimelineOppositeContent>
                        
                        
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <Cloud />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                        
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {huminity} / {hum_hope}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        
                    </TimelineItem>
                
                    <TimelineItem>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    미세먼지
                                </Typography>
                            </TimelineOppositeContent>
                        
                        
                            <TimelineSeparator>
                                <TimelineDot color="secondary" variant="outlined">
                                    <img src={DustImg} width='25' height='25' />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                        
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {finedust}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        
                    </TimelineItem>
                
                    <TimelineItem>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    초미세먼지
                                </Typography>
                            </TimelineOppositeContent>
                        
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <RepeatIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {ufinedust}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        
                    </TimelineItem>
                
                    <TimelineItem>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    가스
                                </Typography>
                            </TimelineOppositeContent>
                        
                            <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <img src={GasImg} width='25' height='25' />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {gas}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        
                    </TimelineItem>
               
            </Timeline>
        </div>
    );
}