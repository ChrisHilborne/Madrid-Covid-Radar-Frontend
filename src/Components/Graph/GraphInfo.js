import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es'

const GraphInfo = ( healthWard ) => {
    const { name, lastUpdated, totalCases, dailyRecords, recordCount} = healthWard.healthWard;

    var actualCases = dailyRecords[recordCount - 1].twoWeekCases;
    
    const formatDate = (lastUpdated) => {
        moment.locale('es-en');
        var date = moment(lastUpdated);
        return date.format('DD MMMM YYYY'); 
    }

    return(
        <>
            <Container>
                <Row>
                    <Col sm={6} md={3} xs={6}>
                        <h5>Zona: </h5> 
                        <h6>{name}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>Casos actuales: </h5> 
                        <h6>{actualCases}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>Casos Totales:</h5>
                        <h6>{totalCases}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>Ultima fecha de datos:</h5> 
                        <h6>{formatDate(lastUpdated)}</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GraphInfo