import { React } from 'react';
import { useTranslation } from 'react-i18next';

import InfoModal from '../../InfoModal';

//sub-components
import Intro from './Sub-Components/1.Intro';
import Types from './Sub-Components/2.Types';
import Settings from './Sub-Components/3.Settings';
import CookiesUsed from './Sub-Components/4.CookiesUsed';
import Acceptance from './Sub-Components/5.Acceptance';


const CookiePolicy = ( {disableCookiePolicy} ) => {
  const { t } = useTranslation('cookie_policy');  
        
  const items = [
    <Intro/>,
    <Types/>,
    <Settings/>,
    <CookiesUsed/>,
    <Acceptance/>
  ];
  
  const elements = [];

  for (const [index, value] of items.entries()) {
    elements.push(<div key={index}>{value}</div>)
  }

  return (
    <>
      <InfoModal 
        title={t('title')}
        disable={disableCookiePolicy}
        elements={elements}
      />
    </>
  );
}

export default CookiePolicy