import { useNavigate } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${movie.id}`);
  };

  return (
    <div className="card">
      <img className="poster" src={movie.image} alt={movie.title} />
      <div className="content">
        <h3 className="title">{movie.title}</h3>
        <p>{movie.description}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Сеанс:</strong> {movie.date} о {movie.time}</p>
      </div>
      <button className="button" onClick={handleBooking}>Забронювати</button>
    </div>
  );
};

export default MovieCard;
