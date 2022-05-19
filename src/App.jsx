import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Detail from "./components/DetailPage/Detail";
function App() {
  return (
    <div className="container my-3">
      <h1>Pokemons!</h1>
      <hr />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
