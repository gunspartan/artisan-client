import React from "react";
import { Link } from "react-router-dom";

export default function PinnedPosts({ posts, loading }) {
  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='PinnedPost row row-cols-lg-3 row-cols-md-1'>
      {posts.map((post) => (
        <div key={post.id} className='col pinned-card-container'>
          <div className='pinned-post-card card'>
            <Link to={`/blog/${post.id}`}>
              {post.img && (
                <div className='PinnedPost-img'>
                  <img src={`/api/${post.image.url}`} alt={post.title} className='card-img-top' />
                </div>
              )}
              <div className='card-body PinnedPost-post'>
                <div className='PinnedPost-title card-title'>
                  <h1>{post.title}</h1>
                </div>
                <div className='PinnedPost-content card-text'>
                  <p>{post.summary.substring(0, 100)}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
