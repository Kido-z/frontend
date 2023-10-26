import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="banner-container">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-image d-flex flex-column align-items-end justify-content-center">
              <h1 class="display-4 fw-bold text-dark">Découvrez notre sélection</h1>
              <div class="button-banner d-flex flex-row">
                <div class="button-group me-2">
                  <Link class="button-link" style={{background: "#93BEE6"}}>
                    De 0 à 1 an
                  </Link>
                </div>
                <div class="button-group me-2">
                  <Link class="button-link" style={{background: "#FDBF3A"}}>
                  De 2 à 5 ans
                  </Link>
                </div>
                <div class="button-group">
                  <Link class="button-link" style={{background: "#1FB36E"}}>
                  De 6 à 12 ans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container details">
        <div className="row">
          <h3 className="d-flex align-items-center justify-content-center fw-bold my-5">De supers jouets pour vos Kido’z</h3>
            <div className="col-lg-4">
              <p>Choisissez des jouets adaptés<br/> et éducatifs pour vos enfants </p>
            </div>
            <div className="col-lg-4">
              <p>économisez chaque mois grâce<br/> à l’abonnement mensuel</p>
            </div>
            <div className="col-lg-4">
              <p>Faites découvrir de nouveaux jouets<br/> tous les mois à vos enfants</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;