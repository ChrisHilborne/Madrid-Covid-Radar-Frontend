import React, { Suspense } from 'react';

// local bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// local styles
import './scss/rfs.scss';
import './styles/rfs.css'
import './styles/styles.css';

// pages
import MainPage from "./Pages/MainPage";
import InfoPage from "./Pages/InfoPage";
import ContactPage from "./Pages/ContactPage"

// components
import NavBar from "./Components/NavBar"
import LoadingSpinner from './Components/LoadingSpinner';
import CookieConsent from "react-cookie-consent";


// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Suspense 
      fallback={<LoadingSpinner />}
    >
      <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/info" component={InfoPage}/>
          <Route path ="/contact" component={ContactPage} />
        </Switch>
      </Router>
      <CookieConsent 
        disableStyles
        containerClasses="shadow cookie-warning fixed-bottom col-lg-12 border rounded p-2"  
        buttonText="Accept"
        buttonClasses="btn btn-primary"
        enableDeclineButton
        declineButtonClasses="btn btn-secondary"
        declineButtonText="Adjust Settings"
      >
        This website uses cookies to enhance the user experience. To read our cookie policy click <a href="/contact">here</a>
      </ CookieConsent>
    </Suspense>
    </>
  );
}

export default App;
