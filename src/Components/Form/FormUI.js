import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Form } from 'react-bootstrap';
import Select from 'react-select';


const FormUI = ( {passUpDataType, passUpGeoCode, options} ) => {
    const { t } = useTranslation();


    const handleChangeHealthWard = (healthWard) => {
        passUpGeoCode(healthWard.value);
    };

    const handleChangeDataType = (dataType) => {
        passUpDataType(dataType);
    }


    const dataOptions = [
        {label: t('formUI.dataOption1'), value: "twoWeekRate"},
        {label: t('formUI.dataOption2'), value: "totalRate"},
        {label: t('formUI.dataOption3'), value: "totalCases"},
        {label: t('formUI.dataOption4'), value: "twoWeekCases"}
    ];

    return (
        
        <Container fluid="md">
            
            <Form.Row>
                <Col className="mb-3" xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Select
                        name="healthWard"
                        options={options}
                        onChange={ (selected) => handleChangeHealthWard(selected)}
                        autoFocus
                        placeholder={t('formUI.healthWard')}
                        isSearchable
                    />
                </Col>
                <Col className="mb-3" xs={12} sm={12} md={12} lg={6} xl={6}>
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