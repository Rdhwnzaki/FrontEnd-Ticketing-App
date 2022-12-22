import React from "react";
// import React, {useEffect, useState } from "react";
import styles from './profile.module.css';
import photo from '../../assets/poto.png';
import location from '../../assets/location.png';
import card from '../../assets/card.png';
import user from '../../assets/user.png';
import star from '../../assets/star.png';
import setting from '../../assets/setting.png';
import log from '../../assets/logout.png';
import rowblue from '../../assets/blue.png';
import rowgrey from '../../assets/grey.png';
import rowred from '../../assets/red.png';
// import { useSelector, useDispatch } from "react-redux";
// import { editProfile } from "../../redux/actions/profileRedux";

function Profile() {

  return (
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.side1}>
            <img src={photo} alt="" className={styles.img} /> <br/>
            <div className={styles.file}>
              <label htmlFor="files" className="btn">Select Photo</label>
              <input type="file" id="files" name="files" />
            </div>
            <div className={styles.name}>
              <h3>Mile Kowaisi</h3>
              <img src={location} alt="" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className={styles.card}>
              <span style={{color:"black"}}> Card </span>
              <span> + Add </span>
            </div>
            <img src={card} alt="" className={styles.imgcard} />
            <div className={styles.span}>
              <img src={user} alt=""/>
              <span className={styles.prof}> Profile </span>
                <img src={rowblue} alt="" className={styles.panah} />
            </div>
            <div className={styles.span}>
                <img src={star} alt=""/>
                <span className={styles.rev}> My Review </span>
                <img src={rowgrey} alt="" className={styles.panah} />
            </div>
            <div className={styles.span}>
                <img src={setting} alt="" />
                <span className={styles.setting}> Setting </span>
                <img src={rowgrey} alt="" className={styles.panah} />
            </div>
            <div className={styles.span}>
                <img src={log} alt="" />
                <span className={styles.log}> Logout </span>
                <img src={rowred} alt="" className={styles.panah} />
            </div>
          </div>
          <div className={styles.side2}>
            <div>
                <h5> Profile </h5>
                <h3> Profile </h3>
            </div>
            <div className={styles.input}>
            <div className={styles.contact}>
                <h6> Contact </h6>
                <p> Email </p>
                <input type="email" name="email" placeholder="" />
                <p> Phone Number </p>
                <input type="number" name="phone" placeholder="" />
            </div>
            <div className={styles.biodata}>
                <h6> Biodata </h6>
                <p> Fullname </p>
                <input type="text" name="fullname" placeholder="" />
                <p> City </p>
                <input type="text" name="city" placeholder=""  />
                <p> Address </p>
                <input type="text" name="address" placeholder=""  />
                <p> Post Code </p>
                <input type="text" name="postcode" placeholder=""/>
            </div>
            </div>
            <button type="submit" > Save </button>
          </div>
        </div>
      </div>  
  )
}

export default Profile