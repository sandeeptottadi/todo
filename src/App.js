import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <h1>Naveen Kumar</h1>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
