import React from 'react';
import { useTranslation } from 'react-i18next';

const LegitimateUse = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('legitimateUse.title')}</h3>
        <p>{t('legitimateUse.p1')}</p>
        <p>{t('legitimateUse.p2')}</p>
        </>
    );
    
}

export default LegitimateUse