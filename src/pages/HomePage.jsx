import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FeaturedProjects from "../components/FeaturedProject";
import About from "../components/About";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default HomePage;
