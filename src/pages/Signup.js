import React from "react";

const Signup = () => {
  return (
    <>
      <div className="signup-wrapper row my-5 justify-content-md-center">
        <div className="col-lg-5 login-card">
          <h3 className="fw-bold mt-5 d-flex justify-content-center">Créer un compte</h3>
          <form className="row g-3 mt-5 needs-validation" novalidate>
              <div className="mb-3 col-md-6">
                <input for="validation01" className="form-control" type="name" name="prenom" required placeholder="Prénom" />
              </div>
              <div className="mb-3 col-md-6">
                <input for="validation01" className="form-control" type="name" name="nom" required placeholder="Nom" />
              </div>
              <div className="mb-3">
                <input className="form-control" type="email" name="email" required placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
              </div>
              <div className="mb-3">
                <input type="password" name="password" required placeholder="Mot de passe" className="form-control" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/>
                <div class="invalid-feedback">
                Un mot de passe valide est necessaire. 
                </div>
              </div>
              <div className="button-principal d-grid pt-3 col-4 mx-auto">
                <button className="btn btn-primary mb-3" type="submit" style={{background: "#FDBF3A"}}>Créer mon compte</button>
              </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup