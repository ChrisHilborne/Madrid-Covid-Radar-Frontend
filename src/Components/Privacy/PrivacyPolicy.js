import { React, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import ChangeLang from '../ChangeLang';

//sub-components
import Intro from './Sub-Components/1.Intro';
import Id from './Sub-Components/2.Id';
import Principles from './Sub-Components/3.Principles';
import Collection from './Sub-Components/4.Collection';
import Rights from './Sub-Components/5.Rights';
import Finality from './Sub-Components/6.Finality';
import Security from './Sub-Components/7.Security';
import OtherSites from './Sub-Components/8.OtherSites';
import Cookies from './Sub-Components/9.Cookies';
import LegitimateUse from './Sub-Components/10.LegitimateUse';
import Categories from './Sub-Components/11.Categories';
import Conservation from './Sub-Components/12.Conservation';
import Destination from './Sub-Components/13.Destination';
import Browser from './Sub-Components/14.Browser';
import Truthfulness from './Sub-Components/15.Truthfulness';
import Acceptance from './Sub-Components/16.Acceptance';
import Revokability from './Sub-Components/17.Revokability';
import Changes from './Sub-Components/18.Changes';

const PrivacyPolicy = ( {disablePrivacyPolicy} ) => {
        const [show, setShow] = useState(true);
        const { t } = useTranslation('privacy_policy');
      
        const handleClose = () => {
          setShow(false);
          disablePrivacyPolicy();
        };
      
        return (
          <>
            <Modal
              size="lg" 
              show={show} 
              onHide={handleClose} 
            >
              <Modal.Header closeButton>
                <Container>
                  <Row className="align-items-centre">
                    <Col className="justify-content-start align-items-centre">
                      <Modal.Title className="d-flex align-items-centre">{t('intro.title')}</Modal.Title>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-centre">
                      <ChangeLang clazz="changelang-modal" />
                    </Col>
                  </Row>
                </Container>
              </Modal.Header>
              <Modal.Body className="p-1">
                  <Intro />
                  <Id />
                  <Principles />
                  <Collection />
                  <Rights />
                  <Finality />
                  <Security />
                  <OtherSites />
                  <Cookies />
                  <LegitimateUse />
                  <Categories />
                  <Conservation />
                  <Destination />
                  <Browser />
                  <Truthfulness />
                  <Acceptance />
                  <Revokability />
                  <Changes />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
}

export default PrivacyPolicy