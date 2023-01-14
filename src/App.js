import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
    <BrowserRouter>
  <Header/>
  <Route path="/" component={HomePage} exact/>
  <Route path="/coins/:id" component={CoinPage}/>
  </BrowserRouter>
    </>

  );
}

export default App;
