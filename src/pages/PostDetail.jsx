import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PostDetail() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        const foundPost = data.find((p) => p.id === parseInt(id));
        setPost(foundPost);
      })
      .catch((error) => console.error("Errore nel caricamento:", error));
  }, [id]);

  if (!post) {
    return <h2>Caricamento...</h2>;
  }

  // Trova il post precedente e successivo
  const currentIndex = posts.findIndex((p) => p.id === parseInt(id));
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="container">
      <h1>{post.titolo}</h1>
      <img src={`http://localhost:3000${post.immagine}`} alt={post.titolo} />
      <p>{post.contenuto}</p>

      {/* Navigazione tra i post */}
      <div className="post-navigation">
        {prevPost && (
          <button className="details-link" onClick={() => navigate(`/posts/${prevPost.id}`)}>
            &laquo; Post Precedente
          </button>
        )}
        {nextPost && (
          <button className="details-link" onClick={() => navigate(`/posts/${nextPost.id}`)}>
            Post Successivo &raquo;
          </button>
        )}
      </div>

      <button className="details-link" onClick={() => navigate("/posts")}>
        Torna alla lista
      </button>
    </div>
  );
}

export default PostDetail;

