import React from 'react';
import { useTranslation } from 'react-i18next';

const Browser = () => {
    const { t } = useTranslation('privacy_policy');

    return (
        <>
        <h3>{t('browser.title')}</h3>
        <p>{t('browser.p1')}</p>
        <p>{t('browser.p2')}</p>
        <ul>
            <li>
                {t('browser.l1')}
            </li>
        </ul>
        <p>{t('intro.p3')}</p>
        </>
    );
    
}

export default Browser