import React from "react";
import NavbarAfter from "../../components/NavbarAfter";
import Navbar from "../../components/NavbarBefore";
import "./index.css";
import {
  FaPaypal,
  FaCcMastercard,
  FaCcVisa,
  FaCcStripe,
  FaLock,
  FaRegClock,
} from "react-icons/fa";
import Footer from "../../components/Footer";
// import axios from "axios";

function Payment() {
  const token = localStorage.getItem("token");
  const price = localStorage.getItem("price");
  // const stock = localStorage.getItem("stock");
  // const id = localStorage.getItem("id_stock");
  // const handleData = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("stock", stock);
  //   axios
  //     .put(
  //       `https://gentle-tights-jay.cyclic.app/stock-ticket/getstockticket/${id}`,
  //       formData,
  //       {
  //         "content-type": "multipart/form-data",
  //       }
  //     )
  //     .then((res) => {
  //       console.log("Update stock succes");
  //       console.log(res);
  //       window.location.reload(false);
  //     })
  //     .catch((err) => {
  //       console.log("Update stock failed");
  //       console.log(err);
  //     });
  // };
  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className="body py-5">
        <div className="container bg-white p-5">
          <div className="row">
            <div className="col-md-6 text-start">
              <h6>Payment Method</h6>
              <div
                className="row py-3"
                style={{ backgroundColor: "#f5f5f5", marginLeft: "5px" }}
              >
                <div className="col-md-3">
                  <h6>Paypal</h6>
                </div>
                <div className="col-md-1 offset-8">
                  <FaPaypal />
                </div>
              </div>
              <div
                className="row py-3"
                style={{ backgroundColor: "#f5f5f5", marginLeft: "5px" }}
              >
                <div className="col-md-3">
                  <h6>Credit Card</h6>
                </div>
                <div className="col-md-3 offset-6">
                  <div className="row">
                    <div className="col-1">
                      <FaCcMastercard />
                    </div>
                    <div className="col-1">
                      <FaCcVisa />
                    </div>
                    <div className="col-1">
                      <FaCcStripe />
                    </div>
                    <div className="col-1">
                      <FaCcVisa />
                    </div>
                    <div className="col-1">
                      <FaCcMastercard />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="mt-4">Card Number</h6>
              <input
                type="text"
                className="form-control"
                placeholder="0000 0000 0000 0000"
              />
              <div className="row mt-4">
                <div className="col-md-6">
                  <h6>Expiry Date</h6>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <h6>CVC/CVV</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="000"
                  />
                </div>
              </div>
              <h6 className="mt-4">
                <FaLock className="me-2" />
                Your transaction is secured with ssl certificate
              </h6>
            </div>
            <div className="col-md-6 text-start">
              <h6>Summary</h6>
              <div className="row">
                <div className="col-md-6">
                  <h6>Pro(Billed Monthly)</h6>
                  <p style={{ color: "#2395FF", fontSize: "10px" }}>
                    Save 20% with annual billing
                  </p>
                </div>
                <div className="col-md-1 offset-4">
                  <h6>$ {price}</h6>
                  <h6
                    style={{
                      fontSize: "10px",
                      marginLeft: "40px",
                      marginTop: "-20px",
                    }}
                  >
                    /Month
                  </h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h6>Refferal Bonouses</h6>
                  <h6 style={{ fontSize: "13px" }}>
                    Vat
                    <FaRegClock className="ms-2" />
                  </h6>
                </div>
                <div className="col-md-1 offset-4">
                  <h6>-$2.00</h6>
                  <h6 style={{ fontSize: "13px", marginLeft: "10px" }}>-20%</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn text-white"
                    style={{ backgroundColor: "#2395FF", width: "600px" }}
                  >
                    Try it free for 30 days
                  </button>
                  <h6
                    className="text-center"
                    style={{ fontSize: "13px", color: "#2395FF" }}
                  >
                    Have promo code?
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;