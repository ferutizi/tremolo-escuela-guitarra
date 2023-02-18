import "./App.scss";
import { Route, Routes } from "react-router-dom";
import OurLocations from "./pages/OurLocations";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import FrequentQuestions from "./pages/FrequentQuestions";
import Contact from "./pages/Contact";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<OurLocations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frequent-questions" element={<FrequentQuestions />} />
      </Routes>
    </main>
  );
}

export default App;
