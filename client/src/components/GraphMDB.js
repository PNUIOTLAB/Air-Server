import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';
import {MDBContainer} from 'mdbreact';
import {Data} from '../SampleData';

function ChartsPage(){
    const [data, setData] = useState({
        dataLine: {
            labels: [1, 2, 3, 4, 5],
            scales: {yAxes: [{ticks: {max: 100, min: 0}}]},
            datasets: [
                {
                    label: "temperature",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130, 158)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: Data.map( Data => Data.temperature)
                },
                {
                    label: "huminity",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
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
                    data: Data.map( Data => Data.huminity)
                },
                {
                    label: "finedust",
                    fill: false,
                    lineTension: 0.3,
                    backgroundColor: "#bdf1ff",
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
                    data: Data.map( Data => Data.finedust)
                }
            ]
        }
    });
    return(
        <MDBContainer>
            <h2>Test</h2>
            <Line data={data.dataLine} options={{responsive: true }} />
        </MDBContainer>
    );
}

export default ChartsPage;