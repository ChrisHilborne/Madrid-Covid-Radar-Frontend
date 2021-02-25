import React from 'react';
import { useTranslation } from 'react-i18next';

const OtherSites = () =>{
    const { t } = useTranslation('privacy_policy');

    return(
        <>
          <h3>{t('otherSites.title')}</h3>
          <p>{t('otherSites.p1')}</p>
          <p>{t('otherSites.p2')}</p>
        </>
    );
    
}

export default OtherSites