import { React, useState, useEffect } from "react";
import GraphUI from './GraphUI.js';
import axios from 'axios';

const Graph = (geoCode , dataType) => {
    const [healthWard, setHealthWard] = useState(null);

    console.log("Graph:")
    console.log(dataType);

    const url = 'http://covidradarmadrid-env.eba-wbgad2ub.eu-south-1.elasticbeanstalk.com/api/geocode/';

    useEffect(() => {
        const data = (geoCode) => {
        axios.get(url.concat(geoCode.geoCode))
            .then( response => {
                setHealthWard(response.data);
            })
            .catch( error => console.error(`Error: ${error}`))
        };
        data(geoCode);
    }, [geoCode]);

        return (
            <>
                {healthWard !== null ? <GraphUI healthWard={healthWard} dataType={dataType} /> : null}
            </>
        );

    
}

export default Graph