import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-8 my-5">
            <form>
              <div class="row g-3 justify-content-md-center">
                <h4 className="col-10 mb-3 fw-bold">Livraison</h4>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="firstName" placeholder="Prénom" required="" />
                  <div class="invalid-feedback">
                  Un prénom valide est demandé.
                  </div>
                </div>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="lastName" placeholder="Nom" required="" />
                  <div class="invalid-feedback">
                  Un nom valide est demandé.
                  </div>
                </div>
                <div class="col-sm-5">
                  <input type="email" class="form-control" id="email" placeholder="Email" />
                  <div class="invalid-feedback">
                    Veuillez entrer une adresse email valide.
                  </div>
                </div>
                <div className="col-sm-5">
                  <input type="password" id="inputPassword5" placeholder="Mot de passe" class="form-control" aria-describedby="passwordHelpBlock" />
                  <div id="passwordHelpBlock" class="form-text">
                    Le mot de passe doit contenir entre 8-20 caractères.
                  </div>
                </div>
                <div class="col-10">
                  <input type="text" class="form-control" id="address" placeholder="Adresse" required="" />
                  <div class="invalid-feedback">
                    Veuiller entrer une adresse.
                  </div>
                </div>
                <div class="col-md-5">
                  <input type="text" class="form-control" id="zip" placeholder="Code postale" required="" />
                  <div class="invalid-feedback">
                    Le code postale est demandé.
                  </div>
                </div>
                <div class="col-md-5">
                  <input type="text" class="form-control" id="city" placeholder="Ville" required="" />
                  <div class="invalid-feedback">
                    Le ville est demandé.
                  </div>
                </div>
                <div class="col-10">
                  <input type="text" class="form-control" id="phone" placeholder="Téléphone" required="" />
                  <div class="invalid-feedback">
                    Le numéro de téléphone est demandé.
                  </div>
                </div>
                <div class="form-check col-lg-10">
                  <input type="checkbox" class="form-check-input" id="same-address" />
                  <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                </div>
              </div>
              <div class="paiement row g-3 my-5 justify-content-md-center">
                <h4 className="row col-10 my-2 pt-2 fw-bold">Paiement</h4>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="cc-number" placeholder="Numéro de la carte" required="" />
                  <div class="invalid-feedback">
                  Le numéro de la carte est demandé.
                  </div>
                </div>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="cc-expiration" placeholder="Date d'expiration (MM/AA)" required="" />
                  <div class="invalid-feedback">
                    La date d'expiration est demandé.
                  </div>
                </div>
                <div class="col-sm-5">
                  <input type="text" class="form-control" id="cc-cvv" placeholder="Code de sécurité" required="" />
                  <div class="invalid-feedback">
                    Le code de sécurité est demandé.
                  </div>
                </div>
                <div class="col-sm-10 mb-3">
                  <input type="text" class="form-control" id="cc-name" placeholder="Nom sur la carte" required="" />
                  <div class="invalid-feedback">
                    Le nom de la carte est demandé.
                  </div>
                </div>
              </div>
              <div class="button-principal row g-3 justify-content-md-center">
                <Link to="/" className="w-100 btn btn-primary btn-lg" type="submit" style={{background: "#FDBF3A"}}>Valider</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout