import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"; // Import the custom hook
import "../index.css";

// Mostro la lista dei post in modo semplice
function Posts() {
  const { posts, fetchPosts } = useGlobalContext(); // Prendo i post e la funzione dal context
  const navigate = useNavigate(); // Per navigare tra le pagine
  console.log(posts);

  // Carico i post all'avvio usando useEffect con Promise
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="container">
      <h1>Post List</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-card"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <h3>{post.titolo || "No titolo"}</h3>
            <img
              src={`http://localhost:3000${post.immagine}`}
              alt={post.titolo}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
            <p>{post.contenuto || "No content available"}</p>
            <p className="tags">
              <strong>Tags:</strong>{" "}
              {post.tags ? post.tags.join(", ") : "No tags"}
            </p>
            <button
              className="details-link"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
