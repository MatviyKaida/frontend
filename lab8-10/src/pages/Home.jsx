import movies from "../data/movies";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div className="home">
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
