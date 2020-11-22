import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import {MDBContainer} from 'mdbreact';
import axios from "axios"

function ChartsPage(){
    const [air, setAir] = useState([
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
        {
            temperature: 0,
            huminity: 0,
            finedust: 0,
            ufinedust: 0,
            gas: 0,
            time: ''
        },
    ]);

   

    const [dataline, setDataline] = useState({
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            datasets: [
                {
                    label: "Temperature",
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "#fa1143",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#fa1143",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0]
                },
                {
                    label: "Huminity",
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0]
                },
                {
                    label: "Finedust",
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "#61dafb",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#61dafb",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0]
                },
                {
                    label: "Ufinedust",
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "#30b34a",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#30b34a",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0]
                },
                {
                    label: "Gas",
                    fill: false,
                    lineTension: 0.3,
                    borderColor: "#fa8211",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#fa8211",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 0, 0, 0, 0]
                }
            ]
        }
    )

    useEffect(() => {
        const interval = setInterval(() => {
            axios.get('http://192.168.0.55:5000/room/102').then(res => {
                setAir(
                    [air[1], air[2], air[3], air[4], air[5],
                    air[6], air[7], air[8], air[9], air[10],
                    air[11], air[12], air[13], air[14], air[15],
                    air[16], air[17], air[18], air[19], air[20],
                    air[21], air[22], air[23], air[24], air[25],
                    air[26], air[27], air[28], air[29],
                    {
                        temperature: res.data.temperature,
                        huminity: res.data.huminity,
                        finedust: res.data.finedust,
                        ufinedust: res.data.ufinedust,
                        gas: res.data.co2/10,
                        time: res.data.time
                    }]
                );
            });
            setDataline({
                ...dataline,
                labels: air.map(air => air.time),
                datasets:[
                    {
                        label: "Temperature",
                        fill: false,
                        lineTension: 0.3,
                        borderColor: "#fa1143",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#fa1143",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: air.map(air => air.temperature)
                    },
                    {
                        label: "Huminity",
                        fill: false,
                        lineTension: 0.3,
                        borderColor: "rgb(35, 26, 136)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgb(35, 26, 136)",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: air.map(air => air.huminity)
                    },
                    {
                        label: "Finedust",
                        fill: false,
                        lineTension: 0.3,
                        borderColor: "#61dafb",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#61dafb",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: air.map(air => air.finedust)
                    },
                    {
                        label: "Ufinedust",
                        fill: false,
                        lineTension: 0.3,
                        borderColor: "#30b34a",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#30b34a",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: air.map(air => air.ufinedust)
                    },
                    {
                        label: "Gas",
                        fill: false,
                        lineTension: 0.3,
                        borderColor: "#fa8211",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "#fa8211",
                        pointBackgroundColor: "rgb(255, 255, 255)",
                        pointBorderWidth: 10,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgb(0, 0, 0)",
                        pointHoverBorderColor: "rgba(220, 220, 220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: air.map(air => air.gas)
                    }
                ]
            });
        }, 5000);
        return() => clearInterval(interval);
    }, [air, dataline]);

    return(
        <MDBContainer>
            <h2>Test</h2>
            <Line data={dataline} options={{responsive: true}} />
        </MDBContainer>
    );
}

export default ChartsPage;