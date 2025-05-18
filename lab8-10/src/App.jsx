import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import "./index.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.error("Помилка завантаження фільмів:", err));
  }, []);

  const filteredMovies = movies.filter(movie =>
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
