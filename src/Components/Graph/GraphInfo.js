import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es'

const GraphInfo = ( {name, twoWeekRate, totalCases, lastUpdated} ) => {
    
    const formatDate = (lastUpdated) => {
        moment.locale('es-en');
        var date = moment(lastUpdated);
        return date.format('DD MMMM YYYY'); 
    }

    return(
        <>
            <Container className="mt-4">
                <Row>
                    <Col>
                        <h4>Zona: </h4> 
                        <h5>{name}</h5>
                    </Col>
                    <Col>
                        <h4>Incedencia actual: </h4> 
                        <h5>{twoWeekRate}</h5>
                    </Col>
                    <Col>
                        <h4>Casos Totales:</h4>
                        <h5>{totalCases}</h5>
                    </Col>
                    <Col>
                        <h4>Ultima fecha de datos:</h4> 
                        <h5>{formatDate(lastUpdated)}</h5>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GraphInfo