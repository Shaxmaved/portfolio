import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"; 

function App() {
  return (
    <>
      <Navbar />
      <Hero 
       name="Ved Sharma" 
       role="AI & ML Engineer" 
       bio="Building intelligent AI solutions using
            Python, FastAPI, React, Machine Learning,
            and Computer Vision."
      />
      {/* <Hero 
       name="Tony Stark" 
       role="Iron Man"
       bio="Genius, billionaire, playboy, philanthropist"
      />
      <Hero 
       name="Peter Parker" 
       role="Spider-Man" 
       bio="With great power comes great responsibility"
      /> */}
      <About />
      <Footer />
    </>
  );
}

export default App;