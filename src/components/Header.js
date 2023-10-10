import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row" align-items-center>
            <div className="col-2">
              <h1>
                <Link className="header-upper-logo">
                  <img src="img/logo.svg" alt="Logo Kido'z" />
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="Chercher dans la boutique"
                  aria-label="Chercher dans la boutique"
                  aria-describedby="basic-addon2"
                  />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className='fs-6'/>
                </span>
              </div>
            </div> 
            <div className="col-3">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark">
                    <img src="img/account.svg" alt="Mon compte" />
                    <p className="mb-0">Se connecter <br/>à mon compte</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-dark" >
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
  )
}

export default Header