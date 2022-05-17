import React from 'react'
import { useSelector } from 'react-redux';
import '../assets/css/index.modules.css';
import { logout, selectUser } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { BoxArrowRight } from 'react-bootstrap-icons';
  

function Navbar() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout ());
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-lg navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand navLogo" href="/">Aquatic</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link navItem" aria-current="page" href="/">Home</a>
              <a className="nav-link navItem" href="/rekomendasi">Rekomendasi</a>
              <a className="nav-link navItem" href="/artikel">Artikel</a>
              <div className="d-flex align-items-center nav-link user px-3">
                <a className='nameUser'>{user.username}</a>
                <BoxArrowRight className='ms-2 logout' onClick={handleLogout} />
              </div>
          </div>
          </div>
        </div>
      </nav>
  );
}
export default Navbar;