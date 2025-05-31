import "./css/App.css";
import { Favorites } from "./pages/Favorites.jsx";
import { Home } from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MovieDetails } from "./pages/MovieDetails.jsx";


function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
