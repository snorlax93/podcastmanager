import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="menu-items">
            <div className="left-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </div>
            <div className="right-nav">
              <Link to="#register" className="nav-link">
                Welcome, Guest
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
