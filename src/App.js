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
import CookieWarning from "./Components/CookieWarning";


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
      <CookieWarning />
    </Suspense>
    </>
  );
}

export default App;
