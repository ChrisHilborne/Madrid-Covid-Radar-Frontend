import React from 'react';
import { useTranslation } from 'react-i18next';

const Types = () =>{
    const { t } = useTranslation('cookie_policy');

    return(
        <>
          <h3>{t('types.title')}</h3>
          <p>{t('types.p1')}</p>
          <ul>
            <li><strong>{t('types.l1.subtitle')}</strong> {t('types.l1.text')} </li>
            <li><strong>{t('types.l2.subtitle')}</strong> {t('types.l2.text')} </li>
          </ul>
          <p>{t('types.p2')}</p>
          <p>{t('types.p3')}</p>
          <ul>
            <li><strong>{t('types.l3.subtitle')}</strong> {t('types.l3.text')} </li>
            <li><strong>{t('types.l4.subtitle')}</strong> {t('types.l4.text')} </li>
          </ul>
          <p>{t('types.p4')}</p>
          <ul>
            <li><strong>{t('types.l5.subtitle')}</strong> {t('types.l5.text')} </li>
            <li><strong>{t('types.l6.subtitle')}</strong> {t('types.l6.text')} </li>
            <li><strong>{t('types.l7.subtitle')}</strong> {t('types.l7.text')} </li>
            <li><strong>{t('types.l8.subtitle')}</strong> {t('types.l8.text')} </li>
            <li><strong>{t('types.l9.subtitle')}</strong> {t('types.l9.text')} </li>
            <li><strong>{t('types.l10.subtitle')}</strong> {t('types.l10.text')} </li>
          </ul>
        </>
    );
}

export default Types