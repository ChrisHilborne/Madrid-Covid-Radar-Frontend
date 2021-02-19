import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t} = useTranslation();

    return(
        <>
        <div className="footer container fluid mt-2">
        <Navbar variant="dark" >
            <Nav className="ml-auto">
                <Nav.Link className="smallLink" href="privacy-policy">{t("navbar.privacy")}</Nav.Link>
                <Nav.Link className="smallLink" href="cookie-policy">{t("navbar.cookies")}</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        </>
    );
}

export default Footer