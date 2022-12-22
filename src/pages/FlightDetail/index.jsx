import React from "react";
import style from "./flightdetail.module.css";
import assets from "../../assets";

const FlightDetail = () => {
  return (
    <div className={style.customContainer}>
      <div className={style.customNav}>
        <div className={style.navLogo}>
          <img src={assets.flight} alt="" />
          <p>Angkasa</p>
        </div>
        <div className={style.navSearch}>
          <input type="search" />
        </div>
        <div className={style.navRoute}>
          <div>Find ticket</div>
          <div>My booking</div>
        </div>
        <div className={style.navProfile}>
          <div>
            <img src={assets.message} alt="" />
          </div>
          <div>
            <img src={assets.notification} alt="" />
          </div>
          <div>
            <img src={assets.navprof} alt="" className={style.navProf} />
          </div>
        </div>
      </div>
      <div className={style.basisHead}>
        <img src={assets.fdhead} alt="" className={style.basisHeaded} />
      </div>
      <div className={style.customBasis}>
        <div className={style.basisLeft}>
          <div>
            <p className={style.blHead}>Contact Person Detail</p>
          </div>
          <div className={style.blContainerTop}>
            <div className={style.blBasisFormTop}>
              <form className={style.blFormTop}>
                <div>
                  <label htmlFor="fullname">Full name</label>
                  <input type="text" name="fullname" placeholder="Fullname" />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" placeholder="Phone" />
                </div>
                <div>
                  <img src={assets.warningbltop} alt="" />
                </div>
              </form>
            </div>
          </div>
          <div>
            <p className={style.blHeadCenter}>Passenger Detail</p>
          </div>
          <div className={style.blContainerCenter}>
            <div className={style.blBasisFormCenter}>
              <form className={style.blFormCenter}>
                <div>
                  <img src={assets.brfcfield} alt="" />
                </div>
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                  />
                </div>
                <div>
                  <label htmlFor="fullname">Fullname</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Fullname"
                  />
                </div>
                <div>
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    id="nationality"
                    placeholder="Nationality"
                  />
                </div>
              </form>
            </div>
          </div>
          <div>
            <p className={style.blHeadCenter}>Passenger Detail</p>
          </div>
          <div className={style.blContainerBottom}>
            <div className={style.blBasisFormBottom}>
              <form className={style.blFormBottom}>
                <div className={style.blfbBasis}>
                  <p className={style.travelInsurance}>Travel insurance</p>
                  <div className={style.insurancePrice}>
                    <p className={style.priceColor}>$ 20</p>
                    <p className={style.paxColor}>/pax</p>
                  </div>
                </div>
                <div>
                  <p className={style.insuranceInfo}>
                    Get travel compensation up to $ 10.000,00
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style.basisRight}>
          <div className={style.basisRHead}>
            <p className={style.brhLeft}>Flight Detail</p>
            <p className={style.brhRight}>View Detail</p>
          </div>
          <div className={style.brContainerTop}>
            <div className={style.brBasisFormTop}>
              <div className={style.brFormTop}>
                <div>
                  <div>
                    <img src={assets.brftlogo} alt="" />
                  </div>
                  <div>
                    <div>Airlines Name</div>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Departure</p>
                  </div>
                  <div>
                    <div>
                      <img
                        src={assets.airlinespace}
                        className={style.brftAirSpace}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p>Arrival</p>
                  </div>
                </div>
                <div className={style.brFormTopSpace}>
                  <p>Date</p>
                  <img src={assets.datespace} alt="" />
                  <p>Time</p>
                </div>
                <div className={style.brFormTopSpace}>
                  <img src={assets.ftcheck} alt="" />
                  <p>
                    <div>Refundable</div>
                  </p>
                </div>
                <div className={style.brFormTopSpace}>
                  <img src={assets.ftcheck} alt="" />
                  <p>
                    <div>Can reschedule</div>
                  </p>
                </div>
                <div>
                  <p>
                    <div>
                      <p>Total Payment</p>
                      <div>$ 145</div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
