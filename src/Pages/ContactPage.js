import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'covid_radar_template', e.target, 'user_sml9o7RoBJv2uPYrYVWHM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }
    

    return (
        <>
        <Container className="contact-container">
            <Form onSubmit={sendEmail}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Correo Electronico" name="email"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmailSubject">
                    <Form.Control type="text" placeholder="Asunto" name="subject"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmailText">
                    <Form.Control as="textarea" rows={4} placeholder="Mensaje" name="message" />
                </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
            </Form>
        </Container>
        </>
    );
}

export default ContactPage