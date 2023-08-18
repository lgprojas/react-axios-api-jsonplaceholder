import React, { useState, useEffect } from "react";
import axios from "axios";
import { Posts } from "./components/Posts";
import Pagination from "./components/Pagination";

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

  const indexOfLastPost = currentPage * postsPerPage; //1*10=10
  const indexOfFirstPost = indexOfLastPost - postsPerPage;//10-10=0
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);//paginas de 0 a 10

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container p-2">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
