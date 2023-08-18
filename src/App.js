import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "./components/Posts";

function App() {

  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(()=>{
    const getPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.org/posts')
      setPost(res.data)
      setLoading(false)      
    }

    getPosts()
  }, [])

  return (
    <div className="App">
      <Posts posts={posts} loading={loading} />
    </div>
  );
}

export default App;
