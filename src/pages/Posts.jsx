import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"; 
import "../index.css";

function Posts() {
  const { posts, fetchPosts } = useGlobalContext(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="container">
      <h1>Post List</h1>
      <div className="posts-container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card" onClick={() => navigate(`/posts/${post.id}`)}>
              <h3>{post.title || "No title"}</h3>
              <img
                src={`http://localhost:3000${post.image}`}
                alt={post.title}
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
              />
              <p>{post.content || "No content available"}</p>
              <p className="tags"><strong>Tags:</strong> {post.tags ? post.tags.join(", ") : "No tags"}</p>
              <button className="details-link" onClick={() => navigate(`/posts/${post.id}`)}>Read more</button>
            </div>
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </div>
  );
}

export default Posts;