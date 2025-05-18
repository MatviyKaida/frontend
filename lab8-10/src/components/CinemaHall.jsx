import { useState } from "react";
// import "./CinemaHall.css"; // або стилі в index.css

const ROWS = 5;
const COLS = 8;
const reservedSeats = [2, 5, 13, 21]; // тимчасово захардкожено

const CinemaHall = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatIndex) => {
    if (reservedSeats.includes(seatIndex)) return;

    if (selectedSeats.includes(seatIndex)) {
      setSelectedSeats(prev => prev.filter(s => s !== seatIndex));
    } else {
      setSelectedSeats(prev => [...prev, seatIndex]);
    }
  };

  const seats = Array.from({ length: ROWS * COLS }, (_, i) => i);

  return (
    <div className="hall">
      {seats.map((seat, index) => {
        const isReserved = reservedSeats.includes(seat);
        const isSelected = selectedSeats.includes(seat);

        return (
          <div
            key={index}
            className={`seat ${
              isReserved ? "reserved" : isSelected ? "selected" : "free"
            }`}
            onClick={() => toggleSeat(seat)}
          >
            {seat + 1}
          </div>
        );
      })}
    </div>
  );
};

export default CinemaHall;
