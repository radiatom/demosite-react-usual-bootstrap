import './App.css';
import { Routes, Route, } from "react-router-dom";
// import Header from './components/Header/HeaderReactBootstrap';
import HederBootstrap from './components/Header/HederBootstrap';
import Home from "./components/Home/Home"
import FavoritePlaces from "./components/FavoritePlaces/FavoritePlaces"
import FotoFavoritePlaces from './components/FotoFavoritePlaces/FotoFavoritePlaces';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          {/* <Header /> react-bootstrap */}
          <HederBootstrap />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home/" element={<Home />} />
            <Route path="/FavoritePlaces/" element={<FavoritePlaces />} />
            <Route path="/FotoFavoritePlaces/" element={<FotoFavoritePlaces />} />
          </Routes>
        </div>

      </header>
    </div>
  );
}

export default App;
