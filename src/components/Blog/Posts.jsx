import React from "react";
import { Link } from "react-router-dom";

export default function Posts({ blogPosts, loading }) {
  console.log(blogPosts);

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  const renderThumbnail = (post) => {
    if (post.image != null) {
      return (
        <div className='post-img'>
          <img src={post.image} alt={post.title} className='card-img-top' />
        </div>
      );
    }
  };

  return (
    <div className='blog-posts row row-cols-lg-2 row-cols-md-1'>
      {blogPosts.map((post) => (
        <div key={post.id} className='col blog-card-container'>
          <div className='blog-post-card card'>
            <Link to={`/blog/${post.id}`}>
              {renderThumbnail(post)}
              <div className='card-body blog-post-content'>
                <div className='card-title blog-post-title'>
                  <h1>{post.title}</h1>
                </div>
                <div className='card-text blog-post-desc'>
                  <p>{post.summary.substring(0, 100)}</p>
                </div>
                <div className='blog-post-details card-text'>
                  <p className='published text-muted'>{post.published_at.substring(0, 10)}</p>
                  <div className='learn-more'>
                    <p>Learn More</p>
                    <i className='fas fa-caret-right'></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
