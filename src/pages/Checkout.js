import React from "react";

const Checkout = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-8 my-5">
            <form>
              <div className="row g-3 justify-content-md-center">
                <h4 className="col-10 mb-3 fw-bold">Livraison</h4>
                <div className="col-sm-5">
                  <input className="form-control" type="name" name="prenom" required placeholder="Prénom" />
                  <div className="invalid-feedback">
                  Un prénom valide est demandé.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input className="form-control" type="name" name="nom" required placeholder="Nom" />
                  <div className="invalid-feedback">
                  Un nom valide est demandé.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input className="form-control" type="email" name="email" required placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                  <div className="invalid-feedback">
                    Veuillez entrer une adresse email valide.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input type="password" id="inputPassword5" placeholder="Mot de passe" required className="form-control" aria-describedby="passwordHelpBlock" />
                  <div id="passwordHelpBlock" className="form-text">
                    Le mot de passe doit contenir entre 8-20 caractères.
                  </div>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" id="address" required placeholder="Adresse" />
                  <div className="invalid-feedback">
                    Veuiller entrer une adresse.
                  </div>
                </div>
                <div className="col-md-5">
                  <input type="text" className="form-control" id="zip" placeholder="Code postale" required />
                  <div className="invalid-feedback">
                    Le code postale est demandé.
                  </div>
                </div>
                <div className="col-md-5">
                  <input type="text" className="form-control" id="city" placeholder="Ville" required />
                  <div className="invalid-feedback">
                    Le ville est demandé.
                  </div>
                </div>
                <div className="col-10">
                  <input type="text" className="form-control" id="phone" placeholder="Téléphone" required="" />
                  <div className="invalid-feedback">
                    Le numéro de téléphone est demandé.
                  </div>
                </div>
                <div className="form-check col-lg-10">
                  <input type="checkbox" className="form-check-input" id="same-address" />
                  <label className="form-check-label" for="same-address">Utiliser l'adresse d'expédition comme adresse de facturation</label>
                </div>
              </div>
              <div className="paiement row g-3 my-5 justify-content-md-center">
                <h4 className="row col-10 my-2 pt-2 fw-bold">Paiement</h4>
                <div className="col-sm-10">
                  <input type="text" for="cc-number" className="form-control" id="cc-number" placeholder="Numéro de la carte" required />
                  <div className="invalid-feedback">
                  Le numéro de la carte est demandé.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input type="text" className="form-control" id="cc-expiration" placeholder="Date d'expiration (MM/AA)" required />
                  <div className="invalid-feedback">
                    La date d'expiration est demandé.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input type="text" className="form-control" id="cc-cvv" placeholder="Code de sécurité" required />
                  <div className="invalid-feedback">
                    Le code de sécurité est demandé.
                  </div>
                </div>
                <div className="col-sm-10 mb-3">
                  <input type="text" className="form-control" id="cc-name" placeholder="Nom sur la carte" required />
                  <div className="invalid-feedback">
                    Le nom de la carte est demandé.
                  </div>
                </div>
              </div>
              <div className="button-principal row g-3 justify-content-md-center">
                <button to="/" className="w-100 btn btn-primary btn-lg" type="submit" style={{background: "#FDBF3A"}}>Valider</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout