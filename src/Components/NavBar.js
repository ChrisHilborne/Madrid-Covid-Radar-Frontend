import React from 'react';
import { Button, Container, Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return(
        <>
        <Container fluid>
                <Navbar variant="dark" expand="md">
                <Navbar.Brand href="/">Covid Radar Madrid</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="info">{t("navbar.info")}</Nav.Link>
                        <Nav.Link href="contact">{t("navbar.contact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <Button variant="link" onClick={() => changeLanguage("es")}>ES</Button>
                    <Button variant="link" onClick={() => changeLanguage("en")}>EN</Button>
                </Nav>
            </Navbar>
        </Container>
        </>
    );
}

export default NavBar