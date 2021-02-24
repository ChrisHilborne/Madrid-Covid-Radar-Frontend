import React from 'react';
import { useTranslation } from 'react-i18next';

const Truthfulness = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('truthfulness.title')}</h3>
        <p>{t('truthfulness.p1')}</p>
        <p>{t('truthfulness.p2')}</p>
        </>
    );
    
}

export default Truthfulness