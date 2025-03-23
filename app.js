import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import EventRegistrationForm from './EventRegistrationForm';
import QRScannerPage from './QRScannerPage';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <i className="bi bi-calendar-event me-2"></i>
              Event Registration System
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <i className="bi bi-pencil-square me-1"></i> Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/scan-qr">
                    <i className="bi bi-qr-code-scan me-1"></i> Scan QR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container py-4">
          <Routes>
            <Route path="/" element={<EventRegistrationForm />} />
            <Route path="/scan-qr" element={<QRScannerPage />} />
          </Routes>
        </div>

        <footer className="bg-dark text-white text-center py-3 mt-5">
          <div className="container">
            <p className="mb-0">© {new Date().getFullYear()} Event Registration System</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
