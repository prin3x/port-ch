import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Binary from "./pages/Binary";
import Bingo from "./pages/Bingo";
import Booking from "./pages/Booking";
import Charity from "./pages/Charity";
import Defi from "./pages/Defi";
import Exchange from "./pages/Exchange";
import FourKing from "./pages/FourKing";
import Future from "./pages/Future";
import GameFi from "./pages/GameFi";
import Home from "./pages/Home";
import POS from "./pages/POS";
import Projects from "./pages/Projects";
import Salebox from "./pages/Salebox";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/exchange" element={<Exchange />} />
      <Route path="projects/future" element={<Future />} />
      <Route path="projects/binary" element={<Binary />} />
      <Route path="projects/defi" element={<Defi />} />
      <Route path="projects/game-fi" element={<GameFi />} />
      <Route path="projects/bingo" element={<Bingo />} />
      <Route path="projects/booking" element={<Booking />} />
      <Route path="projects/wallet" element={<Wallet />} />
      <Route path="projects/salebox" element={<Salebox />} />
      <Route path="projects/4king" element={<FourKing />} />
      <Route path="projects/pos" element={<POS />} />
      <Route path="projects/charity" element={<Charity />} />
    </Routes>
  );
}

export default App;
