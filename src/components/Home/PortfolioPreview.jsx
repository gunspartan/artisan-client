import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PortfolioPreview() {
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState([
    {
      title: "",
      description: "",
      thumbnail: {},
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/portfolios");
        setPortfolio(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Tile animation
  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }
  return (
    <div className='PortfolioPreview'>
      <ul className='hexGrid'>
        {portfolio.map((item, index) => {
          return (
            <li key={index} className='hex'>
              <div className='hexIn'>
                <div className='hexLink'>
                  <img src={`/api/${item.thumbnail.url}`} alt={item.title} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
