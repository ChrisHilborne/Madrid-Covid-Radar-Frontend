import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () =>{
    const { t } = useTranslation('privacy_policy');

    return(
        <>
          <h3>{t('other.title')}</h3>
          <p>{t('other.p1')}</p>
          <p>{t('other.p2')}</p>
        </>
    );
    
}

export default Intro