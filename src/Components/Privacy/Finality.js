import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () =>{
    const { t } = useTranslation('privacy_policy');

    return (
        <>
          <h3>{t('finality.title')}</h3>
          <p>{t('finality.p1')}</p>
          <p>{t('finality.p2')}</p>
          <ul>
            <li>
              <p><strong>{t('finality.subtitle')}</strong> {t('finality.l1.p1')}<br />{t('finality.l1.p2')}</p>
            </li>
          </ul>
          <p>{t('finality.other')}</p>
          <ul>
            <li>{t('finality.l2')}</li>
            <li>{t('finality.l3')}</li>
            <li>{t('finality.l4')}</li>
          </ul>
        </>
    );
    
}

export default Intro