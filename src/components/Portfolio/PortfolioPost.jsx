import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PortfolioPost({ match }) {
  const [post, setPost] = useState({});
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/portfolios?id=${match.params.id}`);

        const post = response.data[0];
        setPost(post);
        setImageUrls(post.images[0].images);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchItem();
  }, []);

  const renderPortfolio = (url, index) => {
    if (url != null) {
      return (
        <div key={index} className='portfolio-img ratio ratio-4x3'>
          <img src={url} alt={`portfolio ${index + 1}`} className='img-fluid' />
        </div>
      );
    }
  };

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='container PortfolioPost'>
      <div className='portfolio-title'>
        <h1>{post.title}</h1>
        <div className='back-btn'>
          <Link to='/portfolio'>Back</Link>
        </div>
        <hr />
      </div>

      <div className='portfolio-description'>
        <p>{post.description}</p>
      </div>
      <div className='portfolio-images'>{imageUrls.map((url, index) => renderPortfolio(url, index))}</div>
    </div>
  );
}
