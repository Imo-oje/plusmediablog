import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import CreatePost from "./pages/create-post";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
