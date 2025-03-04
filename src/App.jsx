import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail"; 

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>Chi siamo</NavLink>
        <NavLink to="/posts" className={({ isActive }) => (isActive ? "active" : "")}>Post</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} /> {/* Aggiungiamo la pagina di dettaglio */}
      </Routes>
    </Router>
  );
}

export default App;