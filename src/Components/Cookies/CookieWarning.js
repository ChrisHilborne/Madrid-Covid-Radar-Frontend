import { React, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import InfoModal from '../InfoModal';
import CookiePolicy from './CookiePolicy'

const CookieWarning = () => {
    const [showCookiePolicy, setShowCookiePolicy] = useState(false);
    const { t } = useTranslation(); 

    const disableCookiePolicy = () => {
        setShowCookiePolicy(false);
    };

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
        {t('cookieWarning.text')} <a className="text-link" role="button" href="#" onClick={() => {setShowCookiePolicy(true)}}>{t('cookieWarning.here')}</a>
        </ CookieConsent>
        {showCookiePolicy ? <CookiePolicy disableCookiePolicy={disableCookiePolicy}/> : null}
    </>


    );
}

export default CookieWarning