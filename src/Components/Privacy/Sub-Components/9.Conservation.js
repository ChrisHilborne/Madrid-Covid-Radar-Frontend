import React from 'react';
import { useTranslation } from 'react-i18next';

const Conservation = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('conservation.title')}</h3>
        <p>{t('conservation.p1')}</p>
        </>
    );
    
}

export default Conservation