import React from "react"; 
import { Link } from "react-router-dom";
import jouet7 from "../assets/jouet7.png";

const SingleProduct = () => {

  return (
    <>
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                <div className="col">
                  <div className="main-product-image">
                    <div className="card p-2 m-auto">
                      <Link>
                        <img src={jouet7} alt="jouet 7" className="card-img-top img-fluid p-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="other-product-images d-flex align-items-start flex-column mb-3 gap-15">
                    <div>
                      <img src={jouet7} alt="jouet 7" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="main-product-detail mx-5 mt-5 px-5">
                    <div>
                      <h3 className="title">WOOD N PLAY</h3>
                      <p className="title-detail">Cagette de fruits et légumes en bois à découper</p>
                      <p className="price">8,39 €</p>
                    </div>
                    <div className="button-principal d-grid gap-2">
                      <Link to="/cart" className="btn btn-primary" style={{background: "#FDBF3A"}} type="button">Ajouter au panier</Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
      <div className="description-wrapper pb-5 home-wrapper-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
              <div className="col">
                <h5 className="fw-bold">Description</h5>
                <p>Votre enfant peu jouer au marchand ou à la marchande avec cette cagette de fruit et légumes.
                  Créez par la marque Wood N Play, les fruits, les légumes et la petite boîte sont entièrement réalisées en bois.<br/>
                  Les fruits et les légumes en bois sont reliés avec du velcro pour couper et assembler à l'infini.
                  Ce jouet en bois aide les enfants à :<br/><br/>
                  développer leur imagination<br/>
                  développer la coordination main-oeil<br/>
                  développer son vocabulaire<br/><br/>
                  Le panier en bois contient 8 aliments : pomme, poire, fraise, citron, tomate, carotte, oignon, aubergine et un couteau pour les couper.
                </p>
              </div>
              <div className="col px-5">
                <h5 className="fw-bold">Caractéristiques</h5>
                <p>
                    EAN : 8053735004555<br/>
                    Âge : 18 mois<br/>
                    Marque : WOOD N PLAY<br/>
                    Dimensions de l'article: L 12 xH 8 xP 18<br/>
                    Poids : 0.5 kg
                </p>
              </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default SingleProduct