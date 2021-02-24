import React from 'react';
import { useTranslation } from 'react-i18next';

const Changes = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('changes.title')}</h3>
        <p>{t('changes.p1')}</p>
        <p>{t('changes.p2')}</p>
        </>
    );
    
}

export default Changes