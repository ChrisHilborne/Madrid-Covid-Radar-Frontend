import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro = () =>{
    const { t } = useTranslation('cookie_policy');

    return(
        <>
          <p>{t('subtitle')}</p>
          <h3>{t('intro.title')}</h3>
          <p>{t('intro.p1')}</p>
        </>
    );
}

export default Intro