/* eslint-disable no-unused-vars */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { About } from "./Components/Aboutme";
import { Skills } from "./Components/Skills";

import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { StarsCanvas } from "./Components/Canvas/Stars";
// import { Header } from "./Components/Header";
// import { Hero } from "./Components/Hero";
// import { About } from "./Components/About";
// import { Skills } from "./Components/Skills";
// import Projects from "./Components/Projects";
// import { Contact } from "./Components/Contact";
// import { StarsCanvas } from "./Components/Canvas/Stars";

function App() {
  return (
    <div className="relative z-0 bg-[#0a192f]">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
