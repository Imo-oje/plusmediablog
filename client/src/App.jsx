import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import CreatePost from "./pages/create-post";
import "./App.css";
import Register from "./pages/register";
import PostDetails from "./pages/postDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
