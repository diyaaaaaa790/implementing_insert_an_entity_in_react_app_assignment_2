import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-movie">Add Movie</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-movie" element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
