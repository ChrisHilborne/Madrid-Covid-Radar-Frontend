import React from 'react';
import { useTranslation } from 'react-i18next';

const Principles = () =>{
    const { t } = useTranslation('privacy_policy');

    return (
        <>
          <h3>{t('principles.title')}</h3>
          <p>{t('principles.p1')}</p>
          <ul>
            <li><strong>{t('principles.subtitle1')}</strong>{t('principles.l1')}</li>
            <li><strong>{t('principles.subtitle2')}</strong>{t('principles.l2')}</li>
            <li><strong>{t('principles.subtitle3')}</strong>{t('principles.l3')}</li>
            <li><strong>{t('principles.subtitle4')}</strong>{t('principles.l4')}</li>
          </ul>
        </>
    );
}

export default Principles