import React from "react";
import { Link } from "react-router-dom";
import jouet7 from "../assets/jouet7.png";

const NewestCard = () => {
  return (
    <div className="col-12">
      <Link to="/:id" className="newest-card">
        <div className="newest-image">
          <img src={jouet7} className="img-fluid" alt="jouet Wood n play dès 18 mois" />
        </div>
        <div className="newest-details my-4">
          <h6 className="brand">WOOD N PLAY</h6>
          <h5 className="description-toy">Dès 18 mois</h5>
          <p className="price">8,39 €</p>
        </div>
        <div className="button-principal d-grid gap-2">
          <button className="btn btn-primary" style={{background: "#FDBF3A"}} type="button">Voir</button>
        </div>
      </Link>  
    </div>
  )
}

export default NewestCard