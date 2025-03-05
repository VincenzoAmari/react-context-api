import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
