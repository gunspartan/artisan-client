import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Posts";
import PinnedPost from "./PinnedPosts";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/blogs?_sort=published_at:DESC");
        setBlogPosts(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/api/blogs?pinned=true&_sort=published_at:DESC");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
    fetchData();
  }, []);

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='container Blog'>
      <div className='Blog-inner'>
        <div className='blog-title'>
          <h1>News</h1>
          <hr />
        </div>
        <div className='blog-content'>
          <div className='blog-pinned'>
            <PinnedPost posts={posts} loading={loading} />
          </div>
          <hr className='posts-separator' />
          <div className='blog-posts'>
            <Post blogPosts={blogPosts} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
