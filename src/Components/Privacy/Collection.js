import React from 'react';
import { useTranslation } from 'react-i18next';

const Collection = () =>{
    const { t } = useTranslation('privacy_policy');

    return (
        <>
          <h3>{t('collection.title')}</h3>
          <p>{t('collection.p1')}</p>
          <ul>
            <li>{t('collection.l1')}</li>
          </ul>            
        </>
    );
    
}

export default Collection