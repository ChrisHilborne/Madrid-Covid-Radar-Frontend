import React from 'react';
import { useTranslation } from 'react-i18next';

const Id = () =>{
    const { t } = useTranslation('privacy_policy');

    return (
        <>
          <h3>{t('id.title')}</h3>
          <u1>
            <li>{t('id.name')}</li>
            <li>{t('id.id')}</li>
            <li>{t('id.address')}</li>
            <li>{t('id.email')}</li>
            <li>{t('id.website')}</li>
          </u1>
        </>
    );
}

export default Id