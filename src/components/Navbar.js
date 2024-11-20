import React from 'react';

const Navbar = () => {
  return (
    <nav className="header  align-items-center d-flex justify-content-between">
      <div className='p-3'>
      <i class='fa fa-bars fa-2x'></i>
      </div>

      {/* Dropdown utilisateur */}
      <div className="dropdown">
        <img
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          alt="User"
          className="rounded-circle img-fluid"
          style={{ cursor: 'pointer' }}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        />
        <ul className="dropdown-menu dropdown-menu-end border-0">
          <li>
            <a className="dropdown-item" href="/profile">
            <i class='fa fa-user me-2'></i>
              Profil
            </a>
          </li>
          <hr className='text-dark'/>
          <li>
            <a className="dropdown-item" href="/logout">
            <i class="fa fa-sign-out me-2"></i>
              Déconnexion
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
