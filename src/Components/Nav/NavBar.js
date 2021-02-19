import React from 'react';
import { Button, Container, Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return(
        <>
            <Navbar className="container fluid" variant="dark" expand="md">
                <Navbar.Brand href="/">Covid Radar Madrid</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
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
        </>
    );
}

export default NavBar