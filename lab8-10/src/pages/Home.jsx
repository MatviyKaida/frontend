import movies from "../data/movies";
import MovieList from "../components/MovieList";
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
