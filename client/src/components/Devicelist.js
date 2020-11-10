import React, {useState} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import DeviceButton from './DeviceButton';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#9b8ae3',
            main: '#7e67e0',
            dark: '#5840bd',
            contrastText: '#684fd1'
        },
    }
});

function Devicelist(){
    const [devices, setDevices] = useState([
        {
            id: 1,
            active: false
        },
        {
            id: 2,
            active: false
        },
        {
            id: 3,
            active: false
        },
        {
            id: 4,
            active: false
        },
        {
            id: 5,
            active: false
        },
        {
            id: 6,
            active: false
        },
    ]);


    const onToggle = id => {
        console.log(id);
        setDevices(
            devices.map(device =>
                (device.id === id) ? {...devices, active: !device.active} : device
                )
        );
    };

    return(
        <div>
            <DeviceButton devices={devices} onToggle={onToggle} />
        </div>
    );
}

export default Devicelist;