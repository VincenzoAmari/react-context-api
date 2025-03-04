import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  // Funzione per prendere tutti i post dall'API
  const fetchPosts = () => {
    fetch("http://localhost:3000/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log("Errore nel caricamento dei post:", error));
  };

  // Funzione per prendere un singolo post dall'API
  const fetchSinglePost = (id) => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.log("Errore nel caricamento del post:", error));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const value = {
    posts,
    post,
    fetchPosts,
    fetchSinglePost,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
