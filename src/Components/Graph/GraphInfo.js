import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import 'moment/locale/es';
import { useTranslation } from 'react-i18next';

const GraphInfo = ( healthWard ) => {
    const { name, totalCases, lastUpdated, dailyRecords, recordCount} = healthWard.healthWard[0];
    const { t } = useTranslation();

    var actualCases = dailyRecords[recordCount - 1].twoWeekCases;
    
    const formatDate = () => {
        moment.locale(t('locale'));
        var date = moment(lastUpdated[0] + "-" + lastUpdated[1] + "-" + lastUpdated[2], "YYYY-MM-DD");
        return date.format('DD MMMM YYYY'); 
    }

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
                        <h6>{actualCases}</h6>
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