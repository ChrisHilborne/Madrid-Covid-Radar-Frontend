import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <p>{t('intro.p1')}</p>
        <p>{t('intro.p2')}</p>
        <p>{t('intro.p3')}</p>
        </>
    );
    
}

export default Intro