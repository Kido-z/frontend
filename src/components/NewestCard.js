import React from "react";

const NewestCard = () => {
  return (
    <div className="col-12">
        <div className="newest-card">
          <div className="newest-image">
            <img src="/img/toys1.jpg" className="img-fluid" alt="jouet" />
          </div>
          <div className="newest-details my-4">
            <h6 className="brand">Ma ferme en folie</h6>
            <h5 className="description-toy">Dès 12 mois</h5>
            <p className="price">22,99 €</p>
          </div>
          <div class="button-newest d-grid gap-2">
            <button class="btn btn-primary" style={{background: "#FDBF3A"}} type="button">Voir</button>
          </div>
        </div>
    </div>
  )
}

export default NewestCard