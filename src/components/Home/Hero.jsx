import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container hero">
      <div className="row">
        <div className="col-lg-4">
          <div className="row hero-text">
            <div className="title col-lg">
              <h1 className="heading">Artisan</h1>
              <h1 className="subheading">Residential Services</h1>
              <p className="lead">Premium Home Renovation</p>
            </div>
            <div className="call-to-action col-lg align-self-end">
              <Link to="/portfolio">
                Discover More
                <span>+</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-img col-lg-8">
          <img
            src="/img/placeholder-img/jason-briscoe-GliaHAJ3_5A-unsplash.jpg"
            alt="Hero img"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
