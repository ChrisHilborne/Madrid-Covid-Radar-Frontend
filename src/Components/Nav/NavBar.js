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
                    <Breadcrumb className="breadcrumb-cont align-items-center">
                        <Breadcrumb.Item className="breadcrumb-item" onClick={() => changeLanguage("es")}>ES</Breadcrumb.Item>
                        <Breadcrumb.Item className="breadcrumb-item" onClick={() => changeLanguage("en")}>EN</Breadcrumb.Item>
                    </Breadcrumb>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBarTop