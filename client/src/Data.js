import axios from "axios";

axios.get('http://192.168.0.55:5000/room/101').then(res => {
    console.log(res.data.temperature);
        const Data = [{
        temperature: res.data.temperature,
        huminity: res.data.huminity,
        finedust: res.data.finedust,
        ufinedust: res.data.ufinedust,
        gas: res.data.co2,
        device1: res.data.device1,
        device2: res.data.device2,
        device3: res.data.device3,
        device4: res.data.device4,
        device5: res.data.device5,
        device6: res.data.device6,
        fire: res.data.fire,
        time: res.data.time
    }];
        console.log(Data);
});







