import { React, useState } from 'react';
import { Navbar , Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import CookiePolicy from "./Cookies/CookiePolicy.js";
import PrivacyPolicy from "./PrivacyPolicy.js";


const Footer = () => {
    const [showCookiePolicy, setShowCookiePolicy] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const { t } = useTranslation();

    const disableCookiePolicy = () => {
        setShowCookiePolicy(false);
    }

    const disablePrivacyPolicy = () => {
        setShowPrivacyPolicy(false);
    }

    return(
        <>
        <div className="footer container fluid mt-2">
        <Navbar variant="dark" >
            <Nav className="ml-auto">
                <Nav.Link className="smallLink" onClick={() => setShowPrivacyPolicy(true)} >{t("navbar.privacy")}</Nav.Link>
                <Nav.Link className="smallLink" onClick={() => setShowCookiePolicy(true)} >{t("navbar.cookies")}</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        {showCookiePolicy ? <CookiePolicy disableCookiePolicy={disableCookiePolicy}/> : null}
        {showPrivacyPolicy ? <PrivacyPolicy disablePrivacyPolicy={disablePrivacyPolicy}/> : null}
        </>
    );
}

export default Footer