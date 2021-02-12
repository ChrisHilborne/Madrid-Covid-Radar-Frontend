import { React, useState } from 'react';
import  Graph from "../Components/Graph/Graph.js";
import Form from "../Components/Form/Form.js";
import { Container } from 'react-bootstrap';

const MainPage = () => {
    const [geoCode, setGeoCode] = useState(null);
    const [dataType, setDataType] = useState({label: "Casos por 10,000 habitantes", value: "twoWeekRate"});

    console.log("Main page:");
    console.log(dataType)    

    return (
        <>
            <Container>
                <Form getDataType={selected => setDataType(selected) } getSelected={selected => setGeoCode(selected)}/>
                {geoCode !== null ? <Graph geoCode={geoCode} dataType={dataType}/> : null}     
            </Container> 
        </>
    );
    
}

export default MainPage