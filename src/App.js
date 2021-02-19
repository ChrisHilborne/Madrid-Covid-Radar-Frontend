import React, { Suspense } from 'react';
import {Container} from 'react-bootstrap';

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
import NavBarTop from "./Components/Nav/NavBarTop";
import NavBarBottom from "./Components/Nav/NavBarBottom";
import LoadingSpinner from './Components/LoadingSpinner';
import CookieWarning from "./Components/Cookies/CookieWarning";


// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Suspense 
      fallback={<LoadingSpinner />}
    >
      <Router>
        <NavBarTop/>
        <NavBarBottom/>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/info" component={InfoPage}/>
          <Route path ="/contact" component={ContactPage} />
        </Switch>
      </Router>
      <CookieWarning />
      
    </Suspense>
    </>
  );
}

export default App;
