import { React, useState, useEffect } from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavBarTop = () => {
    const { t, i18n } = useTranslation();

    const changeLang = (eventKey) => { 
        i18n.changeLanguage(eventKey);
    };

    return(
        <>
            <Navbar className="container rounded-bottom" variant="dark" expand="md">
                <Navbar.Brand href="/">Covid Radar Madrid</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="mr-auto nav-link">
                        <Nav.Link className="nav-link" href="info">{t("navbar.info")}</Nav.Link>
                        <Nav.Link className="nav-link" href="contact">{t("navbar.contact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav variant="pills" defaultActiveKey={i18n.language} onSelect={changeLang}>
                    <Nav.Item>
                        <Nav.Link eventKey="es">ES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="en">EN</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBarTop