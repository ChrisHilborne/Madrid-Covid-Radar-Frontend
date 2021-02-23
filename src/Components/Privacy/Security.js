import React from 'react';
import { useTranslation } from 'react-i18next';

const Security = () =>{
    const { t } = useTranslation('privacy_policy');

    return(
        <>
          <h3>{t('security.title')}</h3>
          <p>{t('security.p1')}</p>
          <p>{t('security.p2')}</p>
        </>
    );
}

export default Security