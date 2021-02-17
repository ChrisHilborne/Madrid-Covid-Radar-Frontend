import React from 'react';
import { Col, Container, Form } from 'react-bootstrap';
import Select from 'react-select';


const FormUI = ( {passUpDataType, passUpGeoCode, options} ) => {

    const handleChangeHealthWard = (healthWard) => {
        passUpGeoCode(healthWard.value);
    };

    const handleChangeDataType = (dataType) => {
        passUpDataType(dataType);
    }


    const dataOptions = [
        {label: "Incedencia por 100,000 habitantes (ultimos 14 días)", value: "twoWeekRate"},
        {label: "Incedencia por 100,000 habitantes (total)", value: "totalRate"},
        {label: "Casos Totales", value: "totalCases"},
        {label: "Casos actuales (ultimos 14 días)", value: "twoWeekCases"}
    ];

    return (
        
        <Container fluid="md">
            <Form.Row>
                <Col className="mb-3" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Select
                        name = "Healthward"
                        options={options}
                        onChange={ (selected) => handleChangeHealthWard(selected)}
                        autoFocus
                        placeholder="Zona Basica de Salud"
                        isSearchable
                    />
                </Col>
                <Col className="mb-3" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Select
                        name = "dataType"
                        options={dataOptions}
                        placeholder="Datos"
                        onChange={ (selected) => handleChangeDataType(selected)}
                    />
                </Col>
            </ Form.Row>
        </Container>
    )
}

export default FormUI;