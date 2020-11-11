import React, {useState, useRef} from 'react';

function Data({data}){
    return(
        <div>
            <p>
                온도: {data.temperature}
            </p>
            <p>
                습도: {data.huminity}
            </p>
            <p>
                미세먼지: {data.finedust}
            </p>
            <p>
                초미세먼지: {data.ufinedust}
            </p>
            <p>
                CO2: {data.co2}
            </p>
            <p>
                기계1: {data.device1}
            </p>
            <p>
                기계2: {data.device2}
            </p>
            <p>
                기계3: {data.device3}
            </p>
        </div>
    );
}

function Show(){
    const [newdata, setData] = useState({
        temperature: 0,
        huminity: 0,
        finedust: 0,
        ufinedust: 0,
        co2: 0,
        room: 0,
        device1: false,
        device2: false,
        device3: false,
        fire: false,
        time: '2020-11-06'
    });

    const {
        temperature,
        huminity,
        finedust,
        ufinedust,
        co2,
        room,
        device1,
        device2,
        device3,
        fire,
        time
    } = newdata;
    

    const data = [
        {
            temperature: 23,
            huminity: 30,
            finedust: 19,
            ufinedust: 2,
            co2: 240,
            room: 101,
            device1: true,
            device2: false,
            device3: true,
            fire: false,
            time: '2020-11-06'
        },
        {
            temperature: 25,
            huminity: 29,
            finedust: 12,
            ufinedust: 1,
            co2: 228,
            room: 102,
            device1: false,
            device2: false,
            device3: true,
            fire: false,
            time: '2020-11-06'
        },
        {
            temperature: 24,
            huminity: 20,
            finedust: 16,
            ufinedust: 2,
            co2: 285,
            room: 103,
            device1: false,
            device2: true,
            device3: false,
            fire: false,
            time: '2020-11-06'
        }
    ];

    return(
        <div>
            <p>
                {data.map(data => (
                    <Data data={data} key={data.room} />
                ))}
            </p>
        </div>
    );
}

export default Show;