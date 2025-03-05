import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext"; 

function PostDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const { post, posts, fetchSinglePost, loading, error } = useGlobalContext(); 

  useEffect(() => {
    fetchSinglePost(id);
  }, [id, fetchSinglePost]);

  if (loading) return <h2>Loading...</h2>;
  
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  if (!post) return <h2>Post not found</h2>;

  const currentIndex = posts.findIndex((p) => p.id === parseInt(id));
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="container">
      <h1>{post.title || "No title"}</h1>
      <img src={`http://localhost:3000${post.image || ""}`} alt={post.title || "Post image"} onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }} />
      <p>{post.content || "No content available"}</p>

      <div className="post-navigation">
        {prevPost && (
          <button className="details-link" onClick={() => navigate(`/posts/${prevPost.id}`)}>
            « Previous Post
          </button>
        )}
        {nextPost && (
          <button className="details-link" onClick={() => navigate(`/posts/${nextPost.id}`)}>
            Next Post »
          </button>
        )}
      </div>

      <button className="details-link" onClick={() => navigate("/posts")}>
        Back to list
      </button>
    </div>
  );
}

export default PostDetail;