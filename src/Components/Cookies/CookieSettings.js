import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CookieSettings = () => {
        const [show, setShow] = useState(true);
      
        const handleClose = () => setShow(false);
      
        return (
          <>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adjust Cookie Settings</Modal.Title>
              </Modal.Header>
              <Modal.Body>This is where we tell the user how to change their cookie settings in their browser.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
}

export default CookieSettings
    