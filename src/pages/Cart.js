import React from "react";
import jouet7 from "../assets/jouet7.png";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="cart-wrapper home-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-title py-3 d-flex justify-content-center align-items-center">
                <h2 className="fw-bold">Mon panier</h2>
              </div>
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <p className="cart-col-1">Article</p>
                <p className="cart-col-2">Prix</p>
                <p className="cart-col-3">Total</p>
              </div>
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-30 d-flex align-items-center">
                  <div className="w-25">
                      <img src={jouet7} alt="jouet" className="img-fluid" />
                  </div>
                  <div className="w-75">
                    <p>fzgebsfndg</p>
                    <p>bdd</p>
                    <p>sdfhgf</p>
                  </div>
                  <div>
                    <MdDelete />
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">50 euros</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <h5 className="title">50 euros</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between pe-5 me-5">
                <h4>Total</h4>
                <p>50 euros</p>
              </div>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
              <Link to="/" className="button-cart btn btn-light" type="button">Continuer mes achats</Link>
              <Link to="/" className="btn btn-primary" type="button" style={{background: "#FDBF3A"}}>Commander</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart