import React from 'react';
import turn_device from '../images/turn_device.png'
import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const TurnDevicePrompt = () => {

    const { t } = useTranslation();

    return (
        <>
        <Container >
            <Row className="mt-5 justify-content-center">
                <img className="w-50 h-50 img-fluid" src={turn_device} alt="device turning"/>
            </Row>
            <Row className="justify-content-center">
                <h5 className="p-5">{t('turnDevice')}   </h5>
            </Row>
        </Container>
        </>

    );
};

export default TurnDevicePrompt