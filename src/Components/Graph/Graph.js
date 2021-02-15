import { React, useState, useEffect } from "react";
import GraphUI from './GraphUI.js';
import axios from 'axios';

const Graph = ( { geoCode, dataChoice } ) => {
    const [healthWard, setHealthWard] = useState(null);

    const url = 'http://covidradarmadrid-env.eba-wbgad2ub.eu-south-1.elasticbeanstalk.com/api/geocode/';

    useEffect(() => {
        console.log(geoCode);
        const getData = (geoCode) => {
            axios.get(url.concat(geoCode))
                .then( response => {
                    setHealthWard(response.data);
                })
                .catch( error => console.error(`Error: ${error}`))
            };
            getData(geoCode);
    }, [geoCode]);

        return (
            <>
            {healthWard !== null ?
                <GraphUI 
                    healthWard={healthWard} 
                    dataChoice={dataChoice}
                /> : null }
            </> 
        );

    
}

export default Graph