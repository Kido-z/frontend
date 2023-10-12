import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="header-upper-logo">
                  <img src="img/logo.svg" alt="Logo Kido'z" />
                </Link>
              </h1>
            </div>
            <div className="col-3">
              <div className="input-group">
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Rechercher un produit..."
                  aria-label="Rechercher un produit..."
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="header-upper-links d-flex align-items-center justify-content-end text-dark gap-60">
                <div className="menu-links d-flex align-items-center">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-10 align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <span>Menu</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <Link className="dropdown-item" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark">
                    <p className="mb-0">À propos</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark">
                    <p className="mb-0">Contact</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark">
                    <p className="mb-0">Compte</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark">
                    <img src="img/cart.svg" alt="Panier" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-dark text-white">0</span>
                      <p className="mb-0">50 €</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;