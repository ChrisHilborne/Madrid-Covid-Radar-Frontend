import React from 'react';
import { useTranslation } from 'react-i18next';

const Rights = () =>{
    const { t } = useTranslation('privacy_policy');

    return (
        <>
          <h3>{t('rights.title')}</h3>
          <p>{t('rights.intro')}</p>
          <ul>
            <li>{t('rights.l1')}</li>
            <li>{t('rights.l2')}</li>
            <li>{t('rights.l3')}</li>
            <li>{t('rights.l4')}</li>
            <li>{t('rights.l5')}</li>
          </ul>
          <p>{t('rights.p1')}</p>
          <p>{t('rights.p2')}</p>
          <p>{t('rights.p3')}</p>
        </>
    );
    
}

export default Rights