import '../index.css'
const CinemaHall = ({ reservedSeats, selectedSeats, onToggle }) => {
  const ROWS = 5;
  const COLS = 8;
  const seats = Array.from({ length: ROWS * COLS }, (_, i) => i);

  return (
    <div className="hall">
      {seats.map(seat => {
        const isReserved = reservedSeats.includes(seat);
        const isSelected = selectedSeats.includes(seat);
        return (
          <div
            key={seat}
            className={`seat ${
              isReserved ? "reserved" : isSelected ? "selected" : "free"
            }`}
            onClick={() => !isReserved && onToggle(seat)}
          >
            {seat + 1}
          </div>
        );
      })}
    </div>
  );
};

export default CinemaHall;
