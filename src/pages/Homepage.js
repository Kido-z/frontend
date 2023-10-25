import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <section className="banner-container">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-image d-flex flex-column align-items-end justify-content-center pe-5">
              <h1 class="display-4 fw-bold text-dark">Découvrez notre sélection</h1>
              <div class="button-banner d-flex flex-row gap-3">
                <div class="button-group me-2">
                  <Link class="button-link btn-primary" style={{background: "#93BEE6"}}>
                    De 0 à 1 an
                  </Link>
                </div>
                <div class="button-group me-2">
                  <Link class="button-link btn-secondary" style={{background: "#FDBF3A"}}>
                  De 2 à 5 ans
                  </Link>
                </div>
                <div class="button-group me-2">
                  <Link class="button-link btn-third" style={{background: "#1FB36E"}}>
                  À partir de 6 ans
                  </Link>
                </div>
                {/* <div class="btn-group me-2" role="group" aria-label="Second group">
                  <Link type="Link" class="btn btn-secondary">
                    De 2 à 5 ans
                  </Link>
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                  <Link type="Link" class="btn btn-info">
                    À partir de 6 ans
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>  
        {/* <div className="col-6">
              <div className="position-relative p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                <img src="img/banner.jpg" alt="banniere principal"/>
              </div>
            </div> 

          <div class="position-relative overflow-hidden p-lg-5 text-center bg-body-tertiary">
            <div class="col-md-6 p-lg-5 mx-auto my-5">
              <img src="img/banner1.jpg" alt="banniere principal"/>
              <h1 class="display-3 fw-bold">Designed for engineers</h1>
              <h3 class="fw-normal text-muted mb-3">
                Build anything you want with Aperture
              </h3>
              <div class="d-flex gap-3 justify-content-center lead fw-normal">
                <a class="icon-link" href="#">
                  Learn more
                  <svg class="bi"></svg>
                </a>
                <a class="icon-link" href="#">
                  Buy
                  <svg class="bi"></svg>
                </a>
              </div>
            </div>
            <div class="product-device shadow-sm d-none d-md-block"></div>
            <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
          </div> */}
      </section>
    </>
  );
};

export default Homepage;