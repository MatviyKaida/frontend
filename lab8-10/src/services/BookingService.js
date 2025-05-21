const BOOKING_KEY = "cinema-bookings";

const getBookings = () => {
  const raw = localStorage.getItem(BOOKING_KEY);
  return raw ? JSON.parse(raw) : {};
};

const saveBooking = (movieId, seatIndexes, userData) => {
  const bookings = getBookings();
  bookings[movieId] = (bookings[movieId] || []).concat({
    seats: seatIndexes,
    user: userData,
  });
  localStorage.setItem(BOOKING_KEY, JSON.stringify(bookings));
};

const getReservedSeats = (movieId) => {
  const bookings = getBookings();
  const movieBookings = bookings[movieId] || [];
  return movieBookings.flatMap(b => b.seats);
};

export default {
  saveBooking,
  getReservedSeats,
};
