import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Explore from "./pages/Explore";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/explore" />} replace="true" />
          <Route path="/explore" element={<Explore />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
