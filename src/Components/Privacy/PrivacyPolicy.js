import { React, useState } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


//sub-components
import Intro from './Intro';
import Id from './Id';
import Principles from './Principles';
import Collection from './Collection';
import Rights from './Rights';
import Finality from './Finality';
import Security from './Security';
import Other from './Other';

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
                <Modal.Title>{t('intro.title')}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Intro />
                  <Id />
                  <Principles />
                  <Collection />
                  <Rights />
                  <Finality />
                  <Security />
                  <Other />
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