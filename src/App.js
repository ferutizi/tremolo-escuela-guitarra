import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import FrequentQuestions from "./pages/FrequentQuestions";
import Contact from "./pages/Contact";
import WhatsappIcon from "./components/WhatsappIcon";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frequent-questions" element={<FrequentQuestions />} />
      </Routes>
      <WhatsappIcon />
    </main>
  );
}

export default App;
