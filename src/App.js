import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import './styles/styles.css'
import MainPage from "./Pages/MainPage";
import InfoPage from "./Pages/InfoPage";
import ContactPage from "./Pages/ContactPage"
import NavBar from "./Components/NavBar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/info" component={InfoPage}/>
        <Route path ="/contact" component={ContactPage} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
