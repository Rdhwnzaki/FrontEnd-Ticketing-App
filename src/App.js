import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/explore" />} replace="true" />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
