import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import RegisterPage from "@/pages/RegisterPage";
import Editor from "@/components/editor/Editor";
import PostView from "./pages/PostView";
import LoginPage from "@/pages/LoginPage";
import Category from "./pages/Category";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-post" element={<Editor />} />
      <Route path="/post/:postId" element={<PostView />} />
      <Route path="/category/:categoryName" element={<Category />} />
    </Routes>
  );
}

export default App;
