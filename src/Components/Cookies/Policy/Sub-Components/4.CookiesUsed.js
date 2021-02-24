import React from 'react';
import { useTranslation } from 'react-i18next';

const CookieUsed = () =>{
    const { t } = useTranslation('cookie_policy');

    return(
        <>
          <h3>{t('cookiesUsed.title')}</h3>
          <p>{t('cookiesUsed.p1')}</p>
          <ul>
            <li><strong>{t('cookiesUsed.l1.subtitle')}</strong> {t('cookiesUsed.l1.text')}</li>
            <li><strong>{t('cookiesUsed.l2.subtitle')}</strong> {t('cookiesUsed.l2.text')}</li>
          </ul>
        </>
    );
}

export default CookieUsed