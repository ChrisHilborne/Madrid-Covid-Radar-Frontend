import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CookiePolicy = ( {disableCookiePolicy} ) => {
        const [show, setShow] = useState(true);
      
        const handleClose = () => {
          setShow(false);
          disableCookiePolicy();
        };
      
        return (
          <>
            <Modal 
              size="lg"
              show={show} 
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Cookie Policy</Modal.Title>
              </Modal.Header>
              <Modal.Body>Cookie Policy.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
}

export default CookiePolicy