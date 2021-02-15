import React from 'react';
import { Bar } from "react-chartjs-2";
import { Container } from 'react-bootstrap'; 
import GraphInfo from './GraphInfo.js';

const GraphUI = ( { healthWard, dataChoice } ) => {
    const {name, totalCases, lastUpdated} = healthWard;
    
    const toString = (date) => {
        const year = date[0];
        var month = date[1].toString();
        var day = date[2].toString();
        
        month = month.length === 2 ? month : "0" + month;
        day = day.length === 2 ? day : "0" + day;
        
        return day + "/" + month + "/" + year;
    };

    var dailyRecords = healthWard.dailyRecords;

    const labels = () => {
            const dates = dailyRecords.map(dailyRecord => { 
                return toString(dailyRecord.date)
            });
            return dates;
    };

    const figures = () => { 
        switch (dataChoice.value) {
            case "twoWeekRate":
                return dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate);
            case "totalCases":
                return dailyRecords.map(dailyRecord => dailyRecord.totalCases);
            case "twoWeekCases":
                return dailyRecords.map(dailyRecord => dailyRecord.twoWeekCases);
            default:
                return dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate);

        }
        
    };


    var data = {
        labels: labels(),
        datasets: [{
            label: dataChoice.label,
            backgroundColor: "rgba(8, 10 ,252, 0.6)",
            hoverBackgroundColor: "rgba(3, 4, 133, 0.8)",
            data: figures(),
            barThickness: "flex",
            categoryPercentage: 1.0,
            barPercentage: 0.9,
        }]
    };

    
    
    var options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [{
                type: "time",
                time: {
                    unit: 'day',
                    round: 'day',
                    format: 'DD MM YYYY' 
                },
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        }
    };
    



    return (
        <>
            <Container>
                <GraphInfo 
                    name={name}
                    twoWeekRate={dailyRecords[dailyRecords.length - 1].twoWeekRate}
                    totalCases={totalCases}
                    lastUpdated={lastUpdated.toString()} 
                />
                <Bar
                    width={400}
                    height={200}
                    data={data}
                    options={options}
                />
            </Container>
        </>
    );
    
}

export default GraphUI