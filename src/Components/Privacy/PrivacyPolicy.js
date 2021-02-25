import { React } from 'react';
import { useTranslation } from 'react-i18next';

import InfoModal from '../InfoModal' 

//sub-components
import Intro from './Sub-Components/1.Intro';
import Collection from './Sub-Components/2.Collection';
import Finality from './Sub-Components/3.Finality';
import Security from './Sub-Components/4.Security';
import OtherSites from './Sub-Components/5.OtherSites';
import Cookies from './Sub-Components/6.Cookies';
import LegitimateUse from './Sub-Components/7.LegitimateUse';
import Categories from './Sub-Components/8.Categories';
import Conservation from './Sub-Components/9.Conservation';
import Destination from './Sub-Components/10.Destination';
import Acceptance from './Sub-Components/11.Acceptance';
import Revokability from './Sub-Components/12.Revokability';
import Changes from './Sub-Components/13.Changes';

const PrivacyPolicy = ( {disablePrivacyPolicy} ) => {
  const { t } = useTranslation('privacy_policy'); 

  const items = [
    <Intro/>,
    <Collection/>,
    <Finality/>, 
    <Security/>, 
    <OtherSites/>, 
    <Cookies/>, 
    <LegitimateUse/>,
    <Categories/>,
    <Conservation/>,
    <Destination/>,
    <Acceptance/>,
    <Revokability/>,
    <Changes/>];

  const elements = [];

  for (const [index, value] of items.entries()) {
    elements.push(<div key={index}>{value}</div>)
  }

  return (
    <>
      <InfoModal
        disable={disablePrivacyPolicy}
        title={t('title')}
        elements={elements}
      />
    </>
  );
}

export default PrivacyPolicy