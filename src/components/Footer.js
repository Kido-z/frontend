import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer className="py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <Link to="/" className="footer-upper-logo">
              <img src="img/logo.svg" alt="Logo Kido'z" />
            </Link>
          </div>
          <div className="col-lg-3 col-md-3">
            <h4>À propos</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-dark py-2 mb-1">Notre engagement</Link>
              <Link className="text-dark py-2 mb-1">Qui sommes-nous ?</Link>
              <Link className="text-dark py-2 mb-1">Paiement sécurisé</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <h4>Besoin d'aide</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-dark py-2 mb-1">FAQ</Link>
              <Link className="text-dark py-2 mb-1">Contact</Link>
              <Link className="text-dark py-2 mb-1">Pages légales</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <h4>Nos réseaux sociaux</h4>
            <div>
              <div className="social-icons d-flex align-items-item-center gap-30">
                <a href="">
                  <BsInstagram className="text-dark fs-4" />
                </a>
                <a href="">
                  <BsFacebook className="text-dark fs-4" />
                </a>
                <a href="">
                  <BsLinkedin className="text-dark fs-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">Tous droits réservés &copy; {new Date().getFullYear()} Kido’z</p>
          </div>
        </div>
      </div>
    </footer>  
    </>
  )
}

export default Footer
