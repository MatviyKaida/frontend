import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">🎬 Кінотеатр</h1>
        <Link to="/" className="home-button">На головну</Link>
      </div>
    </header>
  );
};

export default Header;
