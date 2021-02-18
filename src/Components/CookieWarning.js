import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

const CookieWarning = () => {
    const { t } = useTranslation(); 

    return (
        <>
        <CookieConsent 
            flipButtons
            disableStyles
            containerClasses="trim container align-items-center shadow cookie-warning fixed-bottom border rounded p-4"
            contentClasses="trim text-center p-2 align-self-center"
            buttonWrapperClasses="row float-lg-right align-self-center justify-content-center"  
            buttonClasses="btn btn-primary btn-sm m-1"
            buttonText={t('cookieWarning.consent')}
            enableDeclineButton
            declineButtonClasses="text-sm btn btn-secondary btn-sm m-1"
            declineButtonText={t('cookieWarning.settings')}
        >
            {t('cookieWarning.text')} <a href="/contact">{t('cookieWarning.here')}</a>
        </ CookieConsent>
        </>
    );
}

export default CookieWarning