import { React, useState, useEffect } from 'react';
import { Bar } from "react-chartjs-2";
import { Container } from 'react-bootstrap'; 
import GraphInfo from './GraphInfo.js';
import { useTranslation } from 'react-i18next';

const GraphUI = ( { healthWards, dataChoice } ) => {
    const { t } = useTranslation();
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        if (healthWards.length === 1) {
            setShowInfo(true);
        }
        else {
            setShowInfo(false);
        }
    }, [healthWards])

    const first = healthWards[0];

    const graphLabel = () => {
        return dataChoice === null ? t('formUI.dataOption1') : dataChoice.label;
    };

    const dataLabel = (ward) => {
        return ward.name;
    };

    const backgroundColor = (count) => {
        switch (count % 5) {
            case (1):
                return "rgba(51, 129, 255, 0.5)";
            case (2):
                return "rgba(61, 13, 133, 0.5)";
            case (3):
                return "rgba(6, 40, 94, 0.5)";
            default: 
                return "rgba(111, 15, 214, 0.5)";

        }
    };

    const hoverBackgroundColor = (count) => {
        switch (count % 5) {
            case (1):
                return "rgba(51, 129, 255, 1)";
            case (2):
                return "rgba(61, 13, 133, 1)";
            case (3):
                return "rgba(6, 40, 94, 1)";
            default: 
                return "rgba(111, 15, 214, 1)";

        }
    }

    const labels = () => {
        console.log("first:");
        console.log(first);
        return first.dailyRecords.map(dailyRecord => { 
            return toString(dailyRecord.date)
        });
    };

    const figures = (ward) => {
        const dailyRecords = ward.dailyRecords; 
        if (dataChoice === null) {
            return dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate);
        }
        switch (dataChoice.value) {
            case "twoWeekRate":
                return dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate);
            case "totalCases":
                return dailyRecords.map(dailyRecord => dailyRecord.totalCases);   
            default:
                return dailyRecords.map(dailyRecord => dailyRecord.twoWeekRate);

        }  
    }; 

    const graphData = () => {
        const data = []; 
        let count = 0;
        const sorted = healthWards.sort();
        sorted.forEach(ward => {
            count++;
            data.push({
                label: dataLabel(ward),
                backgroundColor: backgroundColor(count),
                hoverBackgroundColor: hoverBackgroundColor(count),
                data: figures(ward),
                barThickness: "flex",
                categoryPercentage: 1.0,
                barPercentage: 0.9,
            })
        });
        return data.sort();
    }

    const toString = (date) => {
        const year = date[0];
        var month = date[1].toString();
        var day = date[2].toString();
        
        month = month.length === 2 ? month : "0" + month;
        day = day.length === 2 ? day : "0" + day;
        
        return day + "/" + month + "/" + year;
    };

    var data = {
        labels: labels(),
        datasets: graphData(),
    };
    
    var options = {
        title: {
            display: true,
            text: graphLabel()
        },
        locale: t('locale'),
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 1.2,
        scales: {
            xAxes: [{
                type: "time",
                time: {
                    unit: 'day',
                    round: 'day',
                    parser: 'DD MM YYYY' 
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
            <Container fluid="md" className="mb-2">
                {showInfo ? 
                <GraphInfo 
                    healthWard={first}
                    dailyRecords={first.dailyRecords} 
                />
                : null }
                <Bar
                    data={data}
                    options={options}
                />
            </Container>
        </>
    );
    
}

export default GraphUI