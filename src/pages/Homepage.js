import React from "react";
import { Link } from "react-router-dom";
import NewestCard from "../components/NewestCard";
import OurSelection from "../components/OurSelectionCard";
import AgesCard from "../components/AgesCard";

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
              <p>Offrez des jouets abordables et de qualité <br/>à des prix plus bas</p>
            </div>
            <div className="col-lg-4">
              <p>Proposer un large <br/>choix de jouets</p>
            </div>
            <div className="col-lg-4">
              <p>Promouvez une consommation <br/>responsable</p>
            </div>
        </div>
      </section>
      <section className="newest py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Nos nouveautés</h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                <div className="col">
                  <NewestCard />
                </div>
                <div className="col">
                  <NewestCard />
                </div>
                <div className="col">
                  <NewestCard />
                </div>
                <div className="col">
                  <NewestCard />
                </div>  
            </div>    
          </div>
        </div>
      </section>
      <section className="Ourselection py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Découvrez notre sélection</h3>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <OurSelection />
                </div>
                <div className="col">
                  <OurSelection />
                </div>
                <div className="col">
                  <OurSelection />
                </div>  
            </div>    
          </div>
        </div>
      </section>
      <section className="ages-details">
        <div className="row">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 align-items-center g-3">
            <h3 className="section-heading">CHOISIR SELON LES ÂGES</h3>
            <div className="col">
              <AgesCard />
            </div>
            <div className="col">
              <AgesCard />
            </div>
            <div className="col">
              <AgesCard />
            </div>  
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;