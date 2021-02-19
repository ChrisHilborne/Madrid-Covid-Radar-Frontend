import React from 'react';
import { Container, Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const NavBarBottom = () => {
    const { t} = useTranslation();

    return(
        <>
        <Navbar variant="dark" className="container fluid fixed-bottom">
            <Nav className="ml-auto">
                <Nav.Link className="smallLink" href="privacy-policy">{t("navbar.privacy")}</Nav.Link>
                <Nav.Link className="smallLink">{t("navbar.cookies")}</Nav.Link>
            </Nav>
        </Navbar>
        </>
    );
}

export default NavBarBottom