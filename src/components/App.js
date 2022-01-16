import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Navbar/Nav";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import PortfolioPost from "./Portfolio/PortfolioPost";
import Blog from "./Blog/Blog";
import Post from "./Blog/Post";
import ContactPage from "./ContactPage/ContactPage";
import { gsap, TimelineLite, TweenMax, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Post} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={PortfolioPost} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
