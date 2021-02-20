import React, { Suspense } from 'react';

// pages
import MainPage from "./Pages/MainPage";
import InfoPage from "./Pages/InfoPage";
import ContactPage from "./Pages/ContactPage"

// components
import NavBar from "./Components/Nav/NavBar";
import Footer from "./Components/Footer";
import LoadingSpinner from "./Components/LoadingSpinner";
import CookieWarning from "./Components/Cookies/CookieWarning";


// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="page-container">
    <Suspense fallback={<LoadingSpinner />}>
      <div className="content-wrap">   
        <NavBar/>
          <Router>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/info" component={InfoPage}/>
              <Route path ="/contact" component={ContactPage} />
            </Switch>
          </Router>
          <CookieWarning />
      </div>
        <Footer/>
        </Suspense>
    </div>
    </>
  );
}

export default App;
