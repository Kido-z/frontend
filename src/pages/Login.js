import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row justify-content-md-center">
          <div className="col-lg-5 login-card">
            <h3 className="fw-bold d-flex justify-content-center">Connexion</h3>
            <form className="needs-validation" novalidate>
              <div className="py-5">
                <div className="mb-3">
                  <input className="form-control" type="email" name="email" required placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                </div>
                <div className="mb-3">
                  <input type="password" name="password" required placeholder="Mot de passe" className="form-control"/>
                </div>
                <div className="d-flex justify-content-end">
                  <Link to="/forgot-password" className="password">Mot de passe oublié ?</Link>
                </div>
              </div>
              <div className="button-principal d-grid gap-2 col-4 mx-auto">
                <button className="btn btn-primary mb-3" type="submit" style={{background: "#FDBF3A"}}>Se connecter</button>
                <Link to="/" className="button-register" type="button">Créer un compte</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login