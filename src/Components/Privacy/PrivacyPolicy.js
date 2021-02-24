import { React } from 'react';
import { useTranslation } from 'react-i18next';

import InfoModal from '../InfoModal' 

//sub-components
import Intro from './Sub-Components/1.Intro';
import Id from './Sub-Components/2.Id';
import Principles from './Sub-Components/3.Principles';
import Collection from './Sub-Components/4.Collection';
import Rights from './Sub-Components/5.Rights';
import Finality from './Sub-Components/6.Finality';
import Security from './Sub-Components/7.Security';
import OtherSites from './Sub-Components/8.OtherSites';
import Cookies from './Sub-Components/9.Cookies';
import LegitimateUse from './Sub-Components/10.LegitimateUse';
import Categories from './Sub-Components/11.Categories';
import Conservation from './Sub-Components/12.Conservation';
import Destination from './Sub-Components/13.Destination';
import Browser from './Sub-Components/14.Browser';
import Truthfulness from './Sub-Components/15.Truthfulness';
import Acceptance from './Sub-Components/16.Acceptance';
import Revokability from './Sub-Components/17.Revokability';
import Changes from './Sub-Components/18.Changes';

const PrivacyPolicy = ( {disablePrivacyPolicy} ) => {
  const { t } = useTranslation('privacy_policy'); 

  const items = [
    <Intro/>,
    <Id/>,
    <Principles/>,
    <Collection/>,
    <Rights/>, 
    <Finality/>, 
    <Security/>, 
    <OtherSites/>, 
    <Cookies/>, 
    <LegitimateUse/>,
    <Categories/>,
    <Conservation/>,
    <Destination/>,
    <Browser/>,
    <Truthfulness/>,
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