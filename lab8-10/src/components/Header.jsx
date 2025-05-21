import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ search, setSearch }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="site-header">
        <div className="container">
            <h1 className="logo">🎬 Кінотеатр</h1>

            {isHomePage && (
            <div className="search-wrapper">
                <input
                className="search-input"
                type="text"
                placeholder="Пошук фільму..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    )}

    <Link to="/" className="home-button">На головну</Link>
  </div>
</header>

  );
};

export default Header;
