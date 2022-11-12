import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Thank from "./pages/Thank";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thank" element={<Thank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
