import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
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
        console.error(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h2 className='loading'>Loading...</h2>;
  }

  return (
    <div className='container Portfolio'>
      <div className='Portfolio-inner-title'>
        <h1>Our Work</h1>
        <hr />
      </div>
      <div className='Portfolio-inner-content'>
        {portfolio.map((item, index) => {
          return <PortfolioItem key={index} id={item.id} title={item.title} img={item.thumbnail} />;
        })}
      </div>
    </div>
  );
}
