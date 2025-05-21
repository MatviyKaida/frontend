import "../styles/CinemaHall.css";

const CinemaHall = ({ reservedSeats, selectedSeats, onToggle }) => {
  const ROWS = 5;
  const COLS = 8;
  const seats = Array.from({ length: ROWS * COLS }, (_, i) => i);

  return (
    <div className="cinema-container">
      <div className="screen">Екран</div>
      <div className="hall">
        {seats.map(seat => {
          const isReserved = reservedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          let seatClass = "free";
          if (isReserved) seatClass = "reserved";
          else if (isSelected) seatClass = "selected";

          return (
            <div
              key={seat}
              className={`seat ${seatClass}`}
              onClick={() => !isReserved && onToggle(seat)}
            >
              {seat + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CinemaHall;
