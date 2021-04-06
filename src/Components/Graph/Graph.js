import { React, useState, useEffect } from "react";
import GraphUI from './GraphUI.js';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner.js';
import TurnDevice from '../TurnDevice.js';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';


const Graph = ( { geoCodes, dataChoice } ) => {
    const [healthWard, setHealthWard] = useState([]);
    

    const url = 'https://api.covidradarmadrid.es/api/geocode/';

    useEffect(() => {
        const getData = () => {
            var geoData = [];
            Promise.all(geoCodes.map(geoCode => {
                return axios.get(url.concat(geoCode))
                    .then(response => geoData.push(response.data))
            })).then(() => {
                setHealthWard(geoData);
            });
        }
        getData();
    }, [geoCodes]);

        return (
            <>
            <DeviceOrientation>
                <Orientation orientation="landscape" alwaysRender={false}>
                {healthWard.length > 0 ?
                    <GraphUI 
                        healthWards={healthWard} 
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