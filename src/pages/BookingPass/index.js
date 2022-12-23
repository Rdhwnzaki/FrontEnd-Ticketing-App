import React from "react";
import styles from "./tiket.module.css";
import barcod from "../../assets/bar.png";
import plane from "../../assets/plane.png";
import airport from "../../assets/plaN.png";
import titik from "../../assets/titik.png";

export default function Ticket() {
  return (
    <div className={styles.page}>
        <div className={styles.colorp}>
            <div className={styles.kartu}> 
            <div className={styles.tittle}>
                <h1> Booking Pass </h1>
                <img src={titik} alt="" />
            </div>
            <div className={styles.tik}>
            <div className={styles.tiket}>
                <div className={styles.city}>
                    <img src={airport} alt="" />
                    <h1> IDN </h1>
                    <img src={plane} alt="" className={styles.plane} />
                    <h1> JPN </h1>
                </div>
                <div className={styles.filter}>
                    <div className={styles.text}>
                        <span> Code </span>
                        <p> AB-221 </p>
                        <span> Terminal </span>
                        <p> A </p>
                        <span> Departure </span>
                        <p> Monday, 23 December '22 - 07.00 </p>
                    </div>
                    <div className={styles.textt}>
                        <span> Class </span>
                        <p> Economy </p>
                        <span> Code </span>
                        <p> 221 </p>
                    </div>
                </div>
                </div>
                <div className={styles.barcode}>
                <img src={barcod} alt="" />
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
