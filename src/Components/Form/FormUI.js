import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Form } from 'react-bootstrap';
import Select from 'react-select';


const FormUI = ( {options, passUpGeoCode, passUpDataType} ) => {
    const { t } = useTranslation();


    const handleChangeHealthWard = (healthWards) => {
        var geoCodes = [];
        healthWards.forEach(healthWard => {
            geoCodes.push(healthWard.value);
        });
        passUpGeoCode(geoCodes);
    };

    const handleChangeDataType = (dataType) => {
        passUpDataType(dataType);
    }


    const dataOptions = [
        {label: t('formUI.dataOption1'), value: "twoWeekRate"},
        {label: t('formUI.dataOption3'), value: "totalCases"}
    ];

    return (
        
        <Container fluid="md">
            <Form.Row>
                <Col className="mb-3" xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Select
                        name="healthWard"
                        options={options}
                        onChange={ (selected) => handleChangeHealthWard(selected)}
                        autoFocus
                        isMulti
                        placeholder={t('formUI.healthWard')}
                        isSearchable
                    />
                </Col>
                <Col className="mb-3" xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Select
                        name="data" 
                        options={dataOptions}
                        placeholder={t('formUI.data')}
                        onChange={ (selected) => handleChangeDataType(selected)}
                    />
                </Col>
            </ Form.Row>
        </Container>
    )
}

export default FormUI;