import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select';


const FormUI = ( {passUpDataType, passUpSelected, options} ) => {

    const handleChange = (selected) => {
        passUpSelected(selected.value);
    };

    const changeData = (dataChoice) => {
        console.log("FormUI")
        console.log(dataChoice);
        passUpDataType(dataChoice);
    };

    const dataOptions = [
        {label: "Casos por 10,000 habitantes", value: "twoWeekRate"},
        {label: "Casos Totales", value: "casesTotal"}
    ];

    return (
        
        <Container>
            <Row>
                <Col>
                    <Select
                        options={options}
                        onChange={ (selected) => handleChange(selected)}
                        autoFocus
                        placeholder="Zona Basica de Salud"
                        isSearchable
                    />
                </Col>
                <Col>
                    <Select
                        options={dataOptions}
                        onChange={ (dataChoice) => changeData(dataChoice)}
                        placeholder="Datos"
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default FormUI;