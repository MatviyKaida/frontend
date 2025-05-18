import { useState } from "react";
import MovieList from "./components/MovieList";
import moviesData from "./data/movies";
import "./index.css";

const App = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Список фільмів</h1>
      <input
        type="text"
        placeholder="Пошук фільму..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
