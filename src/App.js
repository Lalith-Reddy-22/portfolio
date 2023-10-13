import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skill from "./components/Skills/skill";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/work" element={<Works />} />
        </Routes>
      </HashRouter>
      <Navbar />
      <Intro />
      <About />
      <Skill />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
