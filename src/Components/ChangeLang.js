import React from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'react-bootstrap';

const ChangeLang = ( { clazz } ) => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    }

    return (
        <Breadcrumb className={clazz}>
                <Breadcrumb.Item onClick={() => changeLanguage("es")}>ES</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => changeLanguage("en")}>EN</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default ChangeLang