import React from 'react';
import { useTranslation } from 'react-i18next';

const Categories = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('categories.title')}</h3>
        <p>{t('categories.p1')}</p>
        <ul>
            <li>{t('categories.l1')}</li>
        </ul>
        </>
    );
    
}

export default Categories