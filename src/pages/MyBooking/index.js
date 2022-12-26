import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavbarBefore";
import NavbarAfter from "../../components/NavbarAfter";
import Footer from "../../components/Footer";
import "./index.css";
import Assets from "../../images";
import axios from "axios";
import ModalPhoto from "../../components/ModalPhoto";
import StatusTicket from "../../components/StatusTicket";

function MyBooking() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://localhost:3006/auth/user", user)
      .then((res) => {
        console.log("Get detail user success");
        console.log(res.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("Get detail user fail");
        console.log(err);
      });
  }, []);
  return (
    <div>
      {token ? <NavbarAfter /> : <Navbar />}
      <div className="body2 py-5">
        <div className="container p-5">
          <div className="row">
            <div
              className="col-md-3 bg-white rounded-3 shadow"
              style={{ height: "600px" }}
            >
              <div>
                <img
                  src={data ? data[0].photo : "data not found"}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    border: "3px solid #2395FF",
                    marginTop: "30px",
                    height: "120px",
                    width: "120px",
                  }}
                />
              </div>
              <ModalPhoto />
              <h6 className="mt-4">
                {data ? data[0].fullname : "data not found"}
              </h6>
              <h6 style={{ fontSize: "10px" }}>
                {" "}
                <img src={Assets.map} alt="" />
                {data ? data[0].city : "data not found"},
                {data ? data[0].address : "data not found"}
              </h6>
              <div className="row mt-4">
                <div className="col-md-1">
                  <h6>Cards</h6>
                </div>
                <div className="col-md-1 offset-8">
                  <h6 style={{ color: "#2395FF" }}>+Add</h6>
                </div>
              </div>
              <button
                className="btn mt-3"
                style={{ backgroundColor: "#2395FF", width: "280px" }}
              >
                <h6 className="text-white text-start">
                  {data ? data[0].phone : "data not found"}
                </h6>
                <div className="row">
                  <div className="col-3">
                    <h6 style={{ fontSize: "10px", color: "#AEFAFF" }}>
                      X Card
                    </h6>
                  </div>
                  <div className="col-3 offset-6">
                    <h6 style={{ fontSize: "10px", color: "#AEFAFF" }}>
                      $ 1,440.2
                    </h6>
                  </div>
                </div>
              </button>
              <div className="row mt-3">
                <div className="col-1">
                  <img src={Assets.user} alt="" />
                </div>
                <div className="col-1 offset-2">
                  <h6 style={{ color: "#2395FF" }}>Profile</h6>
                </div>
                <div className="col-1 offset-6">
                  <img src={Assets.btnback2} alt="" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-1">
                  <img src={Assets.star} alt="" />
                </div>
                <div className="col-4 offset-2">
                  <h6>My Review</h6>
                </div>
                <div className="col-1 offset-3">
                  <img src={Assets.btnback3} alt="" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-1">
                  <img src={Assets.setting} alt="" />
                </div>
                <div className="col-1 offset-2">
                  <h6>Settings</h6>
                </div>
                <div className="col-1 offset-6">
                  <img src={Assets.btnback3} alt="" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-1">
                  <img src={Assets.logout} alt="" />
                </div>
                <div className="col-1 offset-2">
                  <h6 style={{ color: "red" }}>Logout</h6>
                </div>
                <div className="col-1 offset-6">
                  <img src={Assets.btnback4} alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-8 offset-1">
              <div className="container bg-white rounded-3">
                <h6 className="text-start pt-3" style={{ color: "#2395FF" }}>
                  MY BOOKING
                </h6>
                <div className="row align-items-center">
                  <div className="col-3 mb-2">
                    <h5 className="text-start">My Booking</h5>
                  </div>
                  <div className="col-3 offset-5">
                    <h6 className="text-end" style={{ color: "#2395FF" }}>
                      Order History
                    </h6>
                  </div>
                </div>
              </div>
              <div className="container bg-white rounded-3 my-4 pt-2 pb-4">
                <h6 className="text-start pt-3 pb-1">
                  Monday, 20 July ‘20 - 12:33
                </h6>
                <div className="row align-items-center">
                  <div className="col-1 mb-3">
                    <h5 className="text-start">IDN</h5>
                  </div>
                  <div className="col-1 mb-3">
                    <img src={Assets.flight} alt="" />
                  </div>
                  <div className="col-1 mb-3">
                    <h5 className="text-start">JPN</h5>
                  </div>
                </div>
                <h6 className="text-secondary text-start">
                  Garuda Indonesia, AB-221
                </h6>
                <hr />
                <div className="row align-items-center">
                  <div className="col-1 my-2">
                    <h6 className="text-start">Status</h6>
                  </div>
                  <div className="col-3 my-2 offset-1">
                    <StatusTicket />
                  </div>
                  <div className="col-3 offset-3">
                    <h6 className="text-end" style={{ color: "#2395FF" }}>
                      View Details <img src={Assets.btnbot} alt="" />
                    </h6>
                  </div>
                </div>
              </div>
              <div className="container bg-white rounded-3 my-4 pt-2 pb-4">
                <h6 className="text-start pt-3 pb-1">
                  Monday, 20 July ‘20 - 12:33
                </h6>
                <div className="row align-items-center">
                  <div className="col-1 mb-3">
                    <h5 className="text-start">IDN</h5>
                  </div>
                  <div className="col-1 mb-3">
                    <img src={Assets.flight} alt="" />
                  </div>
                  <div className="col-1 mb-3">
                    <h5 className="text-start">JPN</h5>
                  </div>
                </div>
                <h6 className="text-secondary text-start">
                  Garuda Indonesia, AB-221
                </h6>
                <hr />
                <div className="row align-items-center">
                  <div className="col-1 my-2">
                    <h6 className="text-start">Status</h6>
                  </div>
                  <div className="col-3 my-2 offset-1">
                    <StatusTicket />
                  </div>
                  <div className="col-3 offset-3">
                    <h6 className="text-end" style={{ color: "#2395FF" }}>
                      View Details <img src={Assets.btnbot} alt="" />
                    </h6>
                  </div>
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

export default MyBooking;
