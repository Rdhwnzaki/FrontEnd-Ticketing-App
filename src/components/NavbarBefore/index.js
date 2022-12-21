import React from "react";
import Assets from "../../images";
import ModalFind from "../Modal";

function Navbar() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-1">
            <img src={Assets.logo} alt="" />
          </div>
          <div className="col-md-1">
            <h4 style={{ marginLeft: "-60px" }}>Ankasa</h4>
          </div>
          <div className="col-md-2 ">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Where you want to go?"
              style={{ backgroundColor: "#f5f5f5", marginLeft: "40px" }}
            />
          </div>
          <div className="col-md-2 ms-4">
            <ModalFind />
          </div>
          <div className="col-md-2">
            <h6>My Booking</h6>
          </div>
          <div className="col-md-3">
            <button
              className="btn shadow"
              style={{
                backgroundColor: "#2395FF",
                color: "white",
                width: "140px",
                height: "45px",
                marginLeft: "190px",
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
