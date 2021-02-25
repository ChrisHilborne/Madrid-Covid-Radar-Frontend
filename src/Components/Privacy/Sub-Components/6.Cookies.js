import React from 'react';
import { useTranslation } from 'react-i18next';

const Cookies = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('cookies.title')}</h3>
        <p>{t('cookies.p1')}</p>
        <p>{t('cookies.p2')}</p>
        </>
    );
    
}

export default Cookies