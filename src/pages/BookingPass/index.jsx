import React, { useEffect, useState } from "react";
import axios from 'axios';
import styles from "./tiket.module.css";
import barcod from "../../assets/bar.png";
import plane from "../../assets/plane.png";
// import airport from "../../assets/plaN.png";
import titik from "../../assets/titik.png";

export default function Ticket() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`http://localhost:3006/stock-ticket/getstockticket`)
        .then ((res) => {
          console.log("get data succes");
          console.log(res.data);
          res.data && setData(res.data.data[3]);
        })
        .catch((err) => {
          console.log("get data fail");
          console.log(err);
        });
      }, [])

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
                    <img src={data.photo} alt="" className={styles.airlines}/>
                    {/* <img src={airport} alt="" className={styles.airlines}/> */}
                    <h1>{data.origin}</h1>
                    <img src={plane} alt="" className={styles.plane} />
                    <h1>{data.destination}</h1>
                </div>
                <div className={styles.filter}>
                    <div className={styles.text}>
                        <span> Code </span>
                        <p>{data.code}</p>
                        <span> Terminal </span>
                        <p>{data.terminal}</p>
                        <span> Departure </span>
                        <p>{data.departure}</p>
                    </div>
                    <div className={styles.textt}>
                        <span> Class </span>
                        <p>{data.type}</p>
                        <span> Gate </span>
                        <p>{data.gate}</p>
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