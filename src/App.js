import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MainPage from "./Pages/MainPage.js";
import NavBar from "./Components/NavBar.js"

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
    </>
  );
}

export default App;
