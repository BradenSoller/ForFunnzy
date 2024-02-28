import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <img className="nav-title" src='animeLogo.jpg'/>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="nav-title" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="nav-title" to="/home">
              Home
            </Link>

            <Link className="nav-title" to="/info">
              Info Page
            </Link>

            <LogOutButton className="nav-title" />
          </>
        )}

        <Link className="nav-title" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
