import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
    const { t } = useTranslation();

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
        <Container className="contact-form">
            <Form onSubmit={sendEmail}>
                <Form.Row>
                    <Form.Control 
                        className="mb-2"
                        type="email" 
                        placeholder={t('contact.email')} 
                        name="email"
                        required
                    />
                </Form.Row>
                <Form.Row>
                    <Form.Control 
                        type="text" 
                        placeholder={t('contact.subject')} 
                        name="subject"
                        className="mb-2"    
                    />
                </Form.Row>
                <Form.Row>    
                    <Form.Control
                        className="mb-2" 
                        as="textarea" 
                        rows={4} 
                        placeholder={t('contact.message')} 
                        name="message" 
                        required
                    />
                </Form.Row>
                <Form.Control.Feedback type="valid">{t('contact.success')}</Form.Control.Feedback>
                <Button variant="primary" type="submit">{t('contact.send')}</Button>
            </Form>
        </Container>
        </>
    );
}

export default ContactPage