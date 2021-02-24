import React from 'react';
import { useTranslation } from 'react-i18next';

const Acceptance = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('acceptance.title')}</h3>
        <p>{t('acceptance.p1')}</p>
        </>
    );
    
}

export default Acceptance