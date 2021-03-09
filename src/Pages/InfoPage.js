import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const InfoPage = () => {
    const { t } = useTranslation("about");

    return (
        <>
            <Container>
                <h3>{t('title')}</h3>
                <p>{t('p1')}<a className="text-link" href="https://www.comunidad.madrid/gobierno/datos-abiertos">{t('link1')}</a>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}{t('frontend')}<a className="text-link" href="https://github.com/ChrisHilborne/Madrid-Covid-Radar/">{t('here')}</a>{t('backend')}<a className="text-link" href="https://github.com/ChrisHilborne/Madrid-Covid-Radar-Frontend/">{t('here')}</a></p>
                <p>{t('contact')}<a className="text-link" href="/contact">{t('here')}</a></p>
            </Container>
        </>
    );
}

export default InfoPage