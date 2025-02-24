import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CryptoDetails from "./pages/CryptoDetails";
import ThemeToggle from "./components/ThemeToggle";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div className="p-4">
        <ThemeToggle />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto/:id" element={<CryptoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
