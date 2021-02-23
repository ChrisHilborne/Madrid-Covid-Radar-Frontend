import React from 'react';
import { Breadcrumb, Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavBarTop = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    return(
        <>
            <Navbar className="container fluid rounded-bottom" variant="dark" expand="md">
                <Navbar.Brand href="/">Covid Radar Madrid</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                    <Nav className="mr-auto nav-link">
                        <Nav.Link className="nav-link" href="info">{t("navbar.info")}</Nav.Link>
                        <Nav.Link className="nav-link" href="contact">{t("navbar.contact")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="ml-auto">
                    <Breadcrumb className="breadcrumb-cont align-items-center">
                        <Breadcrumb.Item onClick={() => changeLanguage("es")}>ES</Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => changeLanguage("en")}>EN</Breadcrumb.Item>
                    </Breadcrumb>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBarTop