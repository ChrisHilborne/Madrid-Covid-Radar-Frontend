import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ChangeLang from '../ChangeLang';

const NavBarTop = () => {
    const { t } = useTranslation();

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
                    <ChangeLang className="changelang-navbar align-items-center" />
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBarTop