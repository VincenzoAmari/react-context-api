import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext(); // 🔹 Crea il contesto

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/posts");
      if (!response.ok) throw new Error("Errore nel caricamento");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Errore nel caricamento dei post:", error);
    }
  };

  const fetchSinglePost = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      if (!response.ok) throw new Error("Errore nel caricamento");
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.error("Errore nel caricamento del post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <GlobalContext.Provider value={{ posts, post, fetchPosts, fetchSinglePost }}>
      {children}
    </GlobalContext.Provider>
  );
};
