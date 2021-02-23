import { React, useState } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const InfoModal = ( {title, body} ) => {
        const [show, setShow] = useState(true);
        const { t } = useTranslation('cookie_settings');
        const handleClose = () => setShow(false);
      
        return (
          <>
            <Modal
              size="lg" 
              show={show} 
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {body}
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

export default InfoModal
    