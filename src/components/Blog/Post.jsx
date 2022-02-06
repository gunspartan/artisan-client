import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import axios from "axios";

export default function Post({ match }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios(`/api/blogs?id=${match.params.id}`);

      const post = response.data[0];
      setPost(post);
      var postBody = document.querySelector(".post-body");
      var image = postBody.querySelectorAll("img");
      console.log(image);
      image.forEach((item) => {
        item.classList.add("img-fluid", "post-body-image");
      });
      // image.classList.add("ratio", "ratio-1x1", "post-body-image");
    };
    fetchItem();
  }, []);

  return (
    <div className='container Post'>
      <div className='Post-inner'>
        <div className='post-cover ratio ratio-16x9'>
          {post.image && <img className='img-fluid' src={post.image} alt='' />}
        </div>
        <div className='post-content'>
          <div className='post-header'>
            <div className='post-title'>
              <h1>{post.title}</h1>
              <div className='back-btn'>
                <Link to='/blog'>Back</Link>
              </div>
            </div>
          </div>
          <hr />
          <div className='post-body'>
            <ReactMarkdown plugins={[gfm]}>{post.content}</ReactMarkdown>
            {post.links && (
              <div className='video ratio ratio-16x9'>
                <iframe src={post.links} frameborder='0' title='YouTube video' allowFullScreen></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
