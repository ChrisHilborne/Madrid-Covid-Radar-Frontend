import React from 'react';
import { useTranslation } from 'react-i18next';

const Revokability = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('revokability.title')}</h3>
        <p>{t('revokability.p1')}</p>
        <p>{t('revokability.p2')}</p>
        </>
    );
    
}

export default Revokability