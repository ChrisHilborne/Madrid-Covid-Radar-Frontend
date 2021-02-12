import axios from 'axios';
import { React, useState, useEffect } from 'react';
import FormUI from './FormUI.js';



const Form = ( {getSelected, getDataType} ) => {
    const [options, setOptions] = useState([]);


    const urlOptions = 'http://covidradarmadrid-env.eba-wbgad2ub.eu-south-1.elasticbeanstalk.com/api/names&geocodes';

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

    const passUpSelected = (selected) => {
        getSelected(selected);
    };

    const passUpDataType = (dataType) => {
        console.log("Form:")
        console.log(dataType);
        getDataType(dataType);
    };

    return(
        <FormUI passUpSelected={getSelected} options={options} passUpDataType={getDataType} />
    );
    
}

export default Form

