import "./App.scss";
import { Route, Routes } from "react-router-dom";
import OurLocations from "./pages/OurLocations";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<OurLocations />} />
      </Routes>
    </main>
  );
}

export default App;
