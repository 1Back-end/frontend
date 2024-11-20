import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Bouton hamburger */}
      <button
        className="btn btn-primary d-lg-none m-2"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <i className="bx bx-menu"></i>
      </button>

      {/* Barre latérale */}
      <div className={`left-side-bar ${isOpen ? '' : 'hidden'}`}>
        <div className="m-2">
          <span className="brand-name fs-4 text-uppercase fw-bold">AcadéLib</span>

          <hr className="text-dark" />

          <div className="list-group list-group-flush">
          <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-home me-2"></i> {/* Dashboard icon */}
              <span>Dashboard</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-th-list me-2"></i> {/* Categories icon */}
              <span>Catégories</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-book me-2"></i> {/* Books icon */}
              <span>Livres</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-book-reader me-2"></i> {/* Loans icon */}
              <span>Emprunts</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-undo me-2"></i> {/* Returns icon */}
              <span>Retours</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-users me-2"></i> {/* Users icon */}
              <span>Utilisateurs</span>
            </a>

            <a href="/" className="align-items-center text-decoration-none mb-4 text-white">
              <i className="fa fa-cogs me-2"></i> {/* Settings icon */}
              <span>Paramètres</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
