
import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import './navbar.css';
import useCatStore from "../../store/catStore";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { categories, fetchCategories, isLoading, error } = useCatStore();

  useEffect(() => {
    fetchCategories();
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="brand-logo">
          Emperio
        </a>

        <div className="search-container">
          <form className="search-form">
            <div className="search-input-group">
              <input
                type="search"
                placeholder="Search for products..."
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search size={18} />
              </button>
            </div>
          </form>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav-links">
             <li className="nav-item dropdown relative">
              <button 
                className="nav-link flex items-center gap-1"
                onClick={() =>  setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories <ChevronDown size={16} />
              </button>

              <div className={`dropdown-menu absolute bg-white shadow-lg rounded mt-2 py-2 z-50 ${isDropdownOpen ? 'show' : ''}`}>
                {isLoading && (
                  <div className="dropdown-item text-gray-500 px-4 py-2 cursor-not-allowed">Loading...</div>
                )}

                {!isLoading && error && (
                  <div className="dropdown-item text-red-500 px-4 py-2 cursor-not-allowed">
                    Error: {error}
                  </div>
                )}

                {!isLoading && !error && categories.length > 0 && categories.map((cat) => (
                  <Link 
                    key={cat.id}
                    to={`/categories/${cat.slug || cat.id}`}
                    className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}

                {!isLoading && !error && categories.length === 0 && (
                  <div className="dropdown-item text-gray-500 px-4 py-2 cursor-not-allowed">No categories found</div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <a href="#men" className="nav-link">Men</a>
            </li>
            <li className="nav-item">
              <a href="#women" className="nav-link">Women</a>
            </li>
            <li className="nav-item">
              <a href="#sale" className="nav-link">Sale</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="auth-btn outline">
              <User size={18} />
              Login
            </button>
            <button className="auth-btn primary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

