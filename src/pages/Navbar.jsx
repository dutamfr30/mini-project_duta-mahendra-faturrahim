import React from 'react'
import '../assets/css/index.modules.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand navLogo" href="/">Aquatic</a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
          <div>
            <div className="navbar-nav ">
              <a className="nav-link navItem" aria-current="page" href="/">Home</a>
              <a className="nav-link navItem" href="/rekomendasi">Rekomendasi</a>
              <a className="nav-link navItem" href="/artikel">Artikel</a>
              <a className="nav-link navItem">About Us</a>
            </div>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;