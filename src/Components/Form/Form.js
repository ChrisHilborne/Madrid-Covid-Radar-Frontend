import axios from 'axios';
import { React, useState, useEffect } from 'react';
import FormUI from './FormUI.js';
import Graph from '../Graph/Graph.js';



const Form = () => {
    const [options, setOptions] = useState([]);
    const [geoCode, setGeoCode] = useState(null);
    const [dataType, setDataType] = useState(null);


    const urlOptions = 'https://api.covidradarmadrid.es/api/names&geocodes';

    useEffect( () => {
        async function getOptions() {
            await axios.get(urlOptions)
            .then( response => {
                const allOptions = response.data;
                setOptions(convertOptions(allOptions));
            })
            .catch(error => console.error(`Error: ${error}`));
        }
        getOptions();
    }, []);

    const convertOptions = (options) => {
        var optionsArray = Object.keys(options).map( name => {
            return { "label": name , "value": options[name]};
        });        
        return optionsArray;
    }

    const getDataType = (selected) => {
        setDataType(selected);
    }

    const getGeoCode = (selected) => {
        setGeoCode(selected);
    }


    return(
        <>
        <FormUI 
            passUpGeoCode={getGeoCode} 
            passUpDataType={getDataType} 
            options={options} 
        />
        { geoCode !== null ?
            <Graph 
                geoCode={geoCode} 
                dataChoice={dataType}
            /> 
        : null }
        </>
    );
    
}

export default Form

