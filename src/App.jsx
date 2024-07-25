import HomePage from "./page/HomePage";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genre from "./page/Genre";
import AnimeDetails from "./page/AnimeDetails";
import Navbar from "./components/Navbar";
import SearchAnime from "./page/SearchAnime";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex bg-gray-900  text-white">
        <SideBar />
        <div className="mx-auto w-full max-w-5xl">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/genre/:id" element={<Genre />}></Route>
            <Route path="/anime/:id" element={<AnimeDetails />}></Route>
            <Route path="/search" element={<SearchAnime />}></Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
