import movies from "../data/movies";
import MovieList from "../components/MovieList";
import "../styles/Home.css"

const Home = ({ search }) => {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;
