import React from 'react';
import { Bar } from "react-chartjs-2";
import moment from 'moment';
import { Container } from 'react-bootstrap'; 

const GraphUI = ( { healthWard, dataType } ) => {

    console.log("graphUI")
    console.log(dataType);

    const toString = (date) => {
        const year = date[0];
        var month = date[1].toString();
        var day = date[2].toString();
        
        month = month.length === 2 ? month : "0" + month;
        day = day.length === 2 ? day : "0" + day;
        
        return year + "-" + month + "-" + day;
    };

    var dailyRecords = healthWard.dailyRecords;
    console.log(dailyRecords);

    const labels = () => {
            const dates = dailyRecords.map(dailyRecord => { 
                return moment(toString(dailyRecord.date));
            });
            return dates;
    };

    const figures = () => { 
        return dataType.value === "totalCases" ? dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate)
                                                : dailyRecords.map(dailyRecord => dailyRecord.totalCases);
    };


    var data = {
        labels: labels(),
        datasets: [{
            label: dataType.label,
            backgroundColor: "#444fe3",
            data: figures(),
            barThickness: "flex",
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
                    displayFormats: {
                        day: 'MMM D'
                    }
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
                <Bar
                    width={400}
                    height={400}
                    data={data}
                    options={options}
                />
            </Container>
        </>
    );
    
}

export default GraphUI