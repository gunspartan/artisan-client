import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function PortfolioPost({ match }) {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `/api/portfolios?id=${match.params.id}`
        );

        const post = response.data[0];
        setPost(post);
      } catch (error) {
        setPost({ error });
      }
      setLoading(false);
    };
    fetchItem();
  }, []);

  const portfolioImg = post.images;

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="container PortfolioPost">
      <div className="portfolio-title">
        <h1>{post.title}</h1>
        <div className="back-btn">
          <Link to="/portfolio">Back</Link>
        </div>
        <hr />
      </div>

      <div className="portfolio-description">
        <p>{post.description}</p>
      </div>
      <div className="portfolio-images">
        {portfolioImg &&
          portfolioImg.map((item) => {
            return (
              <div key={item.id} className="portfolio-img ratio ratio-4x3">
                <img src={`/api/${item.url}`} alt={item.name} className="img-fluid"/>
              </div>
            );
          })}
      </div>
    </div>
  );
}
