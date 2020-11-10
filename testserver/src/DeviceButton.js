import IconButton from '@material-ui/core/IconButton';
import DevicesIcon from '@material-ui/icons/Devices';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
    }
  }));

function Device({device, onToggle}){
    const classes = useStyles();

    return(
        <div>
            <IconButton aria-label="favorite"
                className={classes.margin}
                onClick={() => onToggle(device.id)}//수정
                color={device.active ? "primary" : "default"}
                >
                <DevicesIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default function DeviceButton({devices, onToggle}){
    const classes = useStyles();
    
    return(
        <Grid container container className={classes.root} spacing={5}>
            {devices.map(device => (
                <Device device={device} onToggle={onToggle} key={device.id} />
            ))}
        </Grid>
    );
}