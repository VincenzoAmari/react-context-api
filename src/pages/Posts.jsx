import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Errore nel caricamento:", error));
  }, []);

  return (
    <div className="container">
      <h1>Lista dei Post</h1>

      <div className="posts-container">

        {/* MAP */}

        {posts.map((post) => (   
          <div key={post.id} className="post-card" onClick={() => navigate(`/posts/${post.id}`)}> 
            <h3>{post.titolo || "Senza titolo"}</h3>

            <img 
              src={`http://localhost:3000${post.immagine}`} 
              alt={post.titolo} 
              onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }} 
            />

            <p>{post.contenuto || "Nessun contenuto disponibile"}</p>
            <p className="tags"><strong>Tags:</strong> {post.tags ? post.tags.join(", ") : "Nessun tag"}</p>

            <button className="details-link" onClick={() => navigate(`/posts/${post.id}`)}>Leggi di più</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
