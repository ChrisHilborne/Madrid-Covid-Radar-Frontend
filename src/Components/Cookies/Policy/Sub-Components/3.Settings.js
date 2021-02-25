import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () =>{
    const { t } = useTranslation('cookie_policy');

    return(
        <>
          <h3>{t('settings.title')}</h3>
          <p>{t('settings.p1')}</p>
          <p>{t('settings.p1')}</p>
          <ul>
            <li><a className="text-link" href={t('settings.chrome')}>Chrome</a></li>
            <li><a className="text-link" href={t('settings.microsoft')}>Microsoft Edge</a></li>
            <li><a className="text-link" href={t('settings.firefox')}>Firefox</a></li>
            <li><a className="text-link" href={t('settings.safari')}>Safari</a></li>
            <li><a className="text-link" href={t('settings.opera')}>Opera</a></li>
          </ul>
          <p>{t('settings.p3')} <a href={t('setting.link')}>{t('setting.link')}</a></p>
        </>
    );
}

export default Settings