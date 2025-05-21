import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import movies from "../data/movies";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";
import BookingService from "../services/BookingService";
import { ToastContainer } from "react-toastify";
import "../styles/Booking.css"

const Booking = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  useEffect(() => {
    const seats = BookingService.getReservedSeats(id);
    setReservedSeats(seats);
  }, [id]);

  const toggleSeat = (seat) => {
    setSelectedSeats(prev =>
      prev.includes(seat)
        ? prev.filter(s => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = (userData) => {
    BookingService.saveBooking(id, selectedSeats, userData);
    setReservedSeats(prev => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
  };

  if (!movie) return <div>Фільм не знайдено</div>;

  return (
    <div className="booking">
    <h2>Бронювання для: {movie.title}</h2>
    <CinemaHall
      reservedSeats={reservedSeats}
      selectedSeats={selectedSeats}
      onToggle={toggleSeat}
    />
    {selectedSeats.length > 0 && (
      <BookingForm onSubmit={handleBooking} />
    )}
    <ToastContainer />
  </div>
  );
};

export default Booking;
