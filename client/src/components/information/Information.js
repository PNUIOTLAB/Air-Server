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
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import WarningIcon from '@material-ui/icons/Warning';
import 'fontsource-roboto';

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



export default function CustomizedTimeline() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const [temperature, setTemperature] = useState(0);
    const [huminity, setHuminity] = useState(0);
    const [finedust, setFinedust] = useState(0);
    const [ufinedust, setUfinedust] = useState(0);
    const [gas, setGas] = useState(0);
    const [device1, setDevice1] = useState(null); // on off를 나타낼 0 or 1
    const [device2, setDevice2] = useState(null);
    const [device3, setDevice3] = useState(null);
    const [device4, setDevice4] = useState(null);
    const [device5, setDevice5] = useState(null);
    const [device6, setDevice6] = useState(null);
    const [fire, setFire] = useState(null);

    const handleClickOpen = () => {
        console.log(fire);
        fire ? setOpen(true) : setOpen(false) ; // 이거 안씀
    }

    const handleClose = () => {     // 닫히는 창 구현할때 씀
        setFire();
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
                setFire(res.data.fire);
            });
        }, 5000);
        return() =>clearInterval(interval);
    }, [temperature, huminity, finedust, ufinedust, gas, fire]);
  
    return (
            <Timeline >
                
                    <TimelineItem>
                        
                            <TimelineOppositeContent>
                                <Typography variant="body2" color="textSecondary">
                                    온도
                                </Typography>
                            </TimelineOppositeContent>
                        
                        
                            <TimelineSeparator>
                                <TimelineDot>
                                    <FastfoodIcon />
                                </TimelineDot>
                                <TimelineConnector className={classes.secondaryTail} />
                            </TimelineSeparator>
                        
                       
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {temperature}
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
                                        {huminity}
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
                                <TimelineDot color="primary" variant="outlined">
                                    <HotelIcon />
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
                                <TimelineDot color="secondary">
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
                                <TimelineDot>
                                    <FastfoodIcon />
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
                    <div>
      {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog 안쓰는거
    </Button>*/}
      <Dialog
        open={fire} // 이것만 포함시키면 화재 경보는 Fire가 0이 들어올때까지 절대 안꺼짐. open={fire}
        onClose={handleClose} //이걸 포함시키면 화재 경보가 꺼지긴 하는데 신호를 받으면 다시 켜짐.
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogTitle id="alert-dialog-title"> &nbsp;&nbsp;&nbsp;&nbsp; <FireWarning 
             color="secondary"
             fontSize="Large" />  {"This system detected the Fire"} <FireWarning 
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
            </Timeline>

    );
}