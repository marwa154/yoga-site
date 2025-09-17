import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import './navBar.css'

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: any) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <header className="header fixed-top" id="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand nav__logo">Yoga</Link>

          <div className="nav__buttons d-flex align-items-center">
            <i
              className={`ri-${isDark ? 'sun' : 'moon'}-line me-3 theme-desktop`}
              onClick={toggleTheme}
              style={{ cursor: 'pointer' }}
            ></i>

            <button
              className="navbar-toggler nav__toggle"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ri-apps-2-line"></i>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => {
                  const navbarNav = document.getElementById('navbarNav');
                  if (navbarNav) {
                    // @ts-ignore
                    const collapse = new window.bootstrap.Collapse(navbarNav, { toggle: false });
                    collapse.hide();
                  }
                }}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  zIndex: 1100
                }}
              ></button>
              <li className="nav-item">
                <a href="/" className={`nav-link ${isActive('/')}`}>Home</a>
              </li>

              <li className="nav-item">
                <a href="#health" className="nav-link">Health</a>
              </li>
              <li className="nav-item">
                <a href="#routine" className="nav-link">Routine</a>
              </li>
              <li className="nav-item">
                <a href="#follow" className="nav-link">Follow</a>
              </li>


              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
              </li>
            </ul>
          </div>

          <i
            className={`ri-${isDark ? 'sun' : 'moon'}-line me-3 theme-mobile`}
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;