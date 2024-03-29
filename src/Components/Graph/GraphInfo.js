import { React, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import { useTranslation } from 'react-i18next';

const GraphInfo = ( { healthWard } ) => {
    const { t } = useTranslation();
    const {name, totalCases, recordCount, lastUpdated, weeklyRecords } = healthWard;

    const formatDate = (dateToFormat) => {
        moment.locale(t('locale'));
        var date = moment(dateToFormat[0] + "-" + dateToFormat[1] + "-" + dateToFormat[2], "YYYY-MM-DD");
        return date.format('DD MMMM YYYY'); 
    };

    return(
        <>
            <Container>
                <Row>
                    <Col sm={6} md={3} xs={6}>
                        <h5>{t('graphInfo.name')}:</h5> 
                        <h6>{name}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>{t('graphInfo.actualCases')}:</h5> 
                        <h6>{weeklyRecords[recordCount - 1].twoWeekCases}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>{t('graphInfo.totalCases')}:</h5>
                        <h6>{totalCases}</h6>
                    </Col>
                    <Col sm={6} md={3} xs={6}>
                        <h5>{t('graphInfo.lastUpdated')}:</h5> 
                        <h6>{formatDate(lastUpdated)}</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default GraphInfo