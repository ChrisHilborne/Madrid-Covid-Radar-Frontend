import { React, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

import ChangeLang from './ChangeLang';

const InfoModal = ( {disable, title, elements} ) => {
        const [show, setShow] = useState(true);
      
        const handleClose = () => {
          setShow(false);
          disable();
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
                      <Modal.Title className="d-flex align-items-centre">{title}</Modal.Title>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-centre">
                      <ChangeLang clazz="changelang-modal" />
                    </Col>
                  </Row>
                </Container>
              </Modal.Header>
              <Modal.Body className="p-1">
                  {elements}
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