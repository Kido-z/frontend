import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  return (
    <>
      {/* <header className="header py-3">
        <div className="container-xxl">
          <div className=" d-flex align-items-center">
            <div className="col-2">
              <h1>
                <Link className="header-logo">
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
                  className="form-control py-2"
                  placeholder="Rechercher un produit..."
                  aria-label="Rechercher un produit..."
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-7">
              <div className="header-links d-flex align-items-center">
                
                <ul className="navigation d-flex align-items-center list-unstyled mb-0 gap-60">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li>
                    <Link className="d-flex align-items-center text-dark">
                    À propos
                    </Link>
                  </li>
                  <li>
                    <Link className="d-flex align-items-center text-dark">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="d-flex align-items-center text-dark">
                      Compte
                    </Link>
                  </li>
                  <li>
                    <Link className="d-flex align-items-center text-dark">
                      <img src="img/cart.svg" alt="Panier" />
                      <div className="d-flex flex-column">
                        <span className="badge bg-dark text-white">0</span>
                        <p className="mb-0">50 €</p>
                      </div>
                    </Link>
                  </li>
                </ul>
                <span className="icon-menu">
                  <LuMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid d-flex flex-nowrap justify-content-between">
          <Link className="header-logo m-2 fs-1">
            <img src="img/logo.svg" alt="Logo Kido'z" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header gap-30">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Explore le catalogue
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 fs-5 pe-3 gap-30">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Menu
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    À propos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  Compte
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <form className="search-bar" role="search">
              <input className="form-control" type="search" placeholder="Rechercher un produit..." aria-label="Rechercher un produit..." />
              <button className="btn btn-outline-success" type="submit">
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </button>
            </form>
            <Link className="cart d-flex align-items-center text-dark">
                <img src="img/cart.svg" alt="Panier" />
                <div className="d-flex flex-column">
                  <span className="badge bg-dark text-white">0</span>
                  <p className="mb-0">50 €</p>
                </div>
              </Link>
          </div>
      </nav>
    </>
  );
};

export default Header;
