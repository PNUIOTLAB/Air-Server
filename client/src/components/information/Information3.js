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
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Cloud from '@material-ui/icons/Cloud';
import axios from "axios"
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DevicesIcon from '@material-ui/icons/Devices';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';
import 'fontsource-roboto';
import TempImg from './image/TemperatureImg.svg';
import DustImg from './image/Dust.svg';
import GasImg from './image/Gas.png';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
    root: {
      '& > svg': {
      margin: theme.spacing(2),
      ...theme.typography.button,
      padding: theme.spacing(1),
      flexGrow: 0,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    }},
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

function FireWarning(props) {           // 화재 경보 아이콘
    return (
      <WarningIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> 
      </WarningIcon>
    );
  }


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

export default function CustomizedTimeline3() {
    const classes = useStyles();
    const [room, setRoom] = useState('103');
  
    const [open, setOpen] = React.useState(false);  
    const [temperature, setTemperature] = useState(0);
    const [huminity, setHuminity] = useState(0);
    const [finedust, setFinedust] = useState(0);
    const [ufinedust, setUfinedust] = useState(0);
    const [gas, setGas] = useState(0);
    const [fire, setFire] = useState(null);
    const [device1, setDevice1] = useState(false);
    const [device2, setDevice2] = useState(false);
    const [device3, setDevice3] = useState(false);
    const [device4, setDevice4] = useState(false);
    const [device5, setDevice5] = useState(false);
    const [device6, setDevice6] = useState(false);
    // const [time1, setTime1] = useState(0);

    // var D = new Date();
    
    const [temp_hope, setTemp_hope] = useState(25);
    const [hum_hope, setHum_hope] = useState(40);

    const handleClickOpen = () => {
        console.log(fire);
        fire ? setOpen(true) : setOpen(false) ; // 이거 안씀
    }

    const handleClose = () => {     // 닫히는 창 구현할때 씀
        setFire();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get(`http://localhost:5000/room/${room}`).then(res => {
                console.log(res);
                
                setTemperature(res.data.temperature);
                setHuminity(res.data.huminity);
                setFinedust(res.data.finedust);
                setUfinedust(res.data.ufinedust);
                setGas(res.data.co2);
                // console.log(D.getTime());
                // console.log(time1);
                // if(D.getTime()-time1>=3000){
                //     console.log("overtime");
                //     setDevice1(res.data.device1);
                //     setTime1(0);
                // }
                // else{console.log("discard")}
                setDevice1(res.data.device1); // device1 ? on : off 
                setDevice2(res.data.device2);
                setDevice3(res.data.device3);
                setDevice4(res.data.device4);
                setDevice5(res.data.device5);
                setDevice6(res.data.device6);
                setFire(res.data.fire);
                setTemp_hope(res.data.temp_hope);
                setHum_hope(res.data.hum_hope);
            });
        }, 1000);
        return() =>clearInterval(interval);
    }, [temperature, huminity, finedust, ufinedust,temp_hope,hum_hope]);

    const onToggle1 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': !device1,
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': room,
        }
        ).then(function(response){
            console.log(response);
        });
        
        // setTime1(D.getTime());
        // console.log("time1 ",time1)
        // setDevice1(!device1);
    };
    const onToggle2 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': null,
            '1': !device2,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': room
        }
        ).then(function(response){
            console.log(response);
        });
        // setDevice2(!device2);
    };
    const onToggle3 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': null,
            '1': null,
            '2': !device3,
            '3': null,
            '4': null,
            '5': null,
            '6': room
        }
        ).then(function(response){
            console.log(response);
        });
        // setDevice3(!device3);
    };
    const onToggle4 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': !device4,
            '4': null,
            '5': null,
            '6': room
        }
        ).then(function(response){
            console.log(response);
        });
        // setDevice4(!device4);
    };
    const onToggle5 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': null,
            '4': !device5,
            '5': null,
            '6': room
        }
        ).then(function(response){
            console.log(response);
        });
        // setDevice5(!device5);
    };
    const onToggle6 = () => {
        
        axios.post('http://localhost:5000/devices',{
            '0': null,
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': !device6,
            '6': room
        }
        ).then(function(response){
            console.log(response);
        });
        // setDevice6(!device6);
    };

    return (
    <div>
       
            
       <Grid container
            direction = "row"
            justify="center"
            alignItems="center"
        >   
            <Grid item xs={4}>

                <Grid container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    <Grid item> 
                               
                            <Button
                                variant="contained"
                                color={device1 ? "secondary" : "default"}
                                className={classes.button}
                                startIcon={<DevicesIcon fontSize="large" />}
                                onClick={() => onToggle1()}
                            >
                                에 어 컨
                            </Button>
                        
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color={device2 ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<DevicesIcon fontSize="large" />}
                            onClick={() => onToggle2()}
                        >
                            보 일 러
                        </Button>
                    </Grid>
                    <Grid item> 
                        
                            <Button
                                variant="contained"
                                color={device3 ? "secondary" : "default"}
                                className={classes.button}
                                startIcon={<DevicesIcon fontSize="large" />}
                                onClick={() => onToggle3()}
                            >
                                가 습 기
                            </Button>
                        
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color={device4 ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<DevicesIcon fontSize="large" />}
                            onClick={() => onToggle4()}
                        >
                            제 습 기
                        </Button>
                    </Grid>
                    <Grid item> 
                        
                            <Button
                                variant="contained"
                                color={device5 ? "secondary" : "default"}
                                className={classes.button}
                                startIcon={<DevicesIcon fontSize="large" />}
                                onClick={() => onToggle5()}
                            >
                                환 풍 기 
                            </Button>
                        
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color={device6 ? "secondary" : "default"}
                            className={classes.button}
                            startIcon={<DevicesIcon fontSize="large" />}
                            onClick={() => onToggle6()}
                        >
                            공기청정기
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
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
                                                {temperature}&nbsp;{String.fromCharCode(176)}C  
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
                                                {huminity}&nbsp;%  
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
                                                {finedust}&nbsp;PM10
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
                                                {ufinedust}&nbsp;PM2.5
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
                                                {gas}&nbsp;ppm
                                            </Typography>
                                        </Paper>
                                    </TimelineContent>
                                
                            </TimelineItem>
                            
                        </Timeline>
            </Grid>
        </Grid>
                  
            
      {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog 안쓰는거
    </Button>*/}
      <Dialog
        main
        open={fire} // 이것만 포함시키면 화재 경보는 Fire가 0이 들어올때까지 절대 안꺼짐. open={fire}
        onClose={handleClose} //이걸 포함시키면 화재 경보가 꺼지긴 하는데 신호를 받으면 다시 켜짐.
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"> &nbsp;&nbsp;&nbsp;&nbsp; <FireWarning 
                color="secondary"
                fontSize="Large"
                backgroundColor= "theme.palette.background.paper" />  {"This system detected the Fire"} <FireWarning 
                color="secondary"
                fontSize="Large" /></DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                    Warning : 화재 감지.
                    최대한 빨리 대피해주시기 바랍니다.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            {/*}  <Button onClick={handleClose} color="primary">
                Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus> 안쓰는거
                Agree
            </Button>*/}
            </DialogActions>
        </Dialog>
    </div>        
    );
}