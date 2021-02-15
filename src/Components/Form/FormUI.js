import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Select from 'react-select';


const FormUI = ( {passUpDataType, passUpGeoCode, options} ) => {

    const handleChangeHealthWard = (healthWard) => {
        passUpGeoCode(healthWard.value);
    };

    const handleChangeDataType = (dataType) => {
        passUpDataType(dataType);
    }


    const dataOptions = [
        {label: "Incedencia por 10,000 habitantes (ultimos 14 días)", value: "twoWeekRate"},
        {label: "Casos Totales", value: "totalCases"},
        {label: "Casos actuales (ultimos 14 días)", value: "twoWeekCases"}
    ];

    return (
        
        <Container>
            <Row>
                <Col>
                    <Select
                        name = "Healthward"
                        options={options}
                        onChange={ (selected) => handleChangeHealthWard(selected)}
                        autoFocus
                        placeholder="Zona Basica de Salud"
                        isSearchable
                    />
                </Col>
                <Col>
                    <Select
                        name = "dataType"
                        options={dataOptions}
                        placeholder="Datos"
                        onChange={ (selected) => handleChangeDataType(selected)}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default FormUI;