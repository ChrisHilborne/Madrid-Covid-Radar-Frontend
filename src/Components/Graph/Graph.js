import { React, useState, useEffect } from "react";
import GraphUI from './GraphUI.js';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner.js';
import TurnDevice from '../TurnDevice.js';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';


const Graph = ( { geoCodes, dataChoice } ) => {
    const [healthWard, setHealthWard] = useState(null);
    

    const url = 'https://api.covidradarmadrid.es/api/geocode/';

    useEffect(() => {
        const getData = (geoCodes) => {
            var geoData = new Map();
            Promise.all(geoCodes.map(geoCode => {
                return axios.get(url.concat(geoCode))
                    .then(response => geoData.set(response.data.name, response.data))
            })).then(() => {
                console.log(geoData);
                setHealthWard(geoData)
            });
        }
        getData(geoCodes);
        console.log(healthWard);
    }, [geoCodes, healthWard]);

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