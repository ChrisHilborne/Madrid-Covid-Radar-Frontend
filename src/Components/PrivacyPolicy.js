import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = ( {disablePrivacyPolicy} ) => {
        const [show, setShow] = useState(true);
      
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
                <Modal.Title>Privacy Policy</Modal.Title>
              </Modal.Header>
              <Modal.Body>PRIVACY POLICY</Modal.Body>
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