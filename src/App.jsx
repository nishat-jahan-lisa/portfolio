import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Half-Round Gradient from the Right Side */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at right, #4f4f4f, #1a1a1a, #000000)",
        }}
      ></div>

      {/* Main Content with Navbar */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies/>
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;