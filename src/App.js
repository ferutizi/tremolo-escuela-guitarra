import "./App.scss";
import { Route, Routes } from "react-router-dom";
import useHours from "./hooks/useHours";
import Inscription from "./pages/Inscription";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import WhatsappIcon from "./components/WhatsappIcon";

function App() {
  const [hours] = useHours();
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <WhatsappIcon />
      {hours.map(i => <p>{i.dia}</p>)}
    </main>
  );
}

export default App;
