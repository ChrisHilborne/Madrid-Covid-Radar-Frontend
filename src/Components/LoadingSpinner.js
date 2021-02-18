import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <>
            <Container fluid className="d-flex on-top min-vh-100 justify-content-center align-items-center" >
            <Spinner animation="border" variant="primary" role="status" size="xl">
                <span className="sr-only">Loading...</span>
            </Spinner>
            </Container> 
        </>
    );
}

export default LoadingSpinner