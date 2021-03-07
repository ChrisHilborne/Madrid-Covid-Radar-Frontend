import { React, useState, useEffect } from "react";
import GraphUI from './GraphUI.js';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner.js';
import TurnDevice from '../TurnDevice.js';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';


const Graph = ( { geoCode, dataChoice } ) => {
    const [healthWard, setHealthWard] = useState(null);
    

    const url = 'https://api.covidradarmadrid.es/api/geocode/';

    useEffect(() => {
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
            <DeviceOrientation>
                <Orientation orientation="landscape" alwaysRender={false}>
                {healthWard !== null ?
                    <GraphUI 
                        healthWard={healthWard} 
                        dataChoice={dataChoice}
                    /> 
                    : 
                    <LoadingSpinner /> }
                </Orientation>
                <Orientation orientation="portrait" alwaysRender={false}>
                    <TurnDevice/>
                </Orientation>
            </DeviceOrientation>
            </> 
        );

    
}

export default Graph