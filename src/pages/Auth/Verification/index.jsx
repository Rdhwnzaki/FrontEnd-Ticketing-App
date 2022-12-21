import React, { useState } from "react";
import assets from "../../../assets";
import Illustration from "../../../components/Illustration";
import style from "./verification.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verificationAccount } from "../../../redux/Actions/Verification/Customer";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVerification = (e) => {
    e.preventDefault();
    let data = {
      email,
      otp,
    };
    dispatch(verificationAccount(data, navigate));
  };

  return (
    <div className={style.customBasis}>
      <div className={style.basisLeft}>
        <Illustration className={style.splashPos} />
      </div>
      <div className={style.basisRight}>
        <div className={style.rightHeader}>
          <img src={assets.flight} alt="" />
          <p>Afaantu</p>
        </div>
        <form onSubmit={handleVerification} className={style.rightBody}>
          <h4>Verification OTP</h4>
          <div className="mt-3">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div>
            <input type="text" name="otp" id="otp" placeholder="Otp" />
          </div>
          <button type="submit">Verification</button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
