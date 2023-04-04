import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Nav from "./components/Nav";
import Home from "./pages/Home";
/* import Gallery from "./pages/Gallery"; */
import Contact from "./pages/Contact";
import WhatsappIcon from "./components/WhatsappIcon";
import { Analytics } from '@vercel/analytics/react';
;

function App() {
  return (
    <>
      <main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
  {/*         <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsappIcon />
      </main>
      <Analytics />
    </>
  );
}

export default App;
