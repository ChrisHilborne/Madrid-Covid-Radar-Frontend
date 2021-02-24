import React from 'react';
import { useTranslation } from 'react-i18next';

const Destination = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('destination.title')}</h3>
        <ul>
            <li>
                <strong>{t('destination.subtitle1')}</strong> 
                {t('destination.l1p1')}
                <br />
                {t('destination.l1p2')}
            </li>
        </ul>
        <p>{t('destination.p1')}</p>
        </>
    );
    
}

export default Destination