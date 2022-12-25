import React from "react";
import style from "./flight.module.css";
import assets from "../../assets";

const Flight = () => {
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
      <div className={style.basisHead2}>
        <div className={style.basisHeadLeft}>
          <img
            src={assets.flightwhite}
            alt=""
            className={style.whFlightWhite}
          />
        </div>
        <div className={style.basisHeadCenter}>
          <div className={style.bhcTop}>
            <div className={style.bhcTopLeft}>
              <div className={style.bhcFrom}>From</div>
              <div className={style.bhcOrigin}>Medan (IDN)</div>
            </div>
            <div className={style.bhcTopCenter}>
              <img src={assets.rlarrow} alt="" className={style.bhcRlArrow} />
            </div>
            <div className={style.bhcTopRight}>
              <div className={style.bhcFrom}>From</div>
              <div className={style.bhcOrigin}>Medan (IDN)</div>
            </div>
          </div>
          <div className={style.bhcBottom}>
            <div className={style.bhcInfo}>Day Date</div>
            <div className={style.bhcInfoSpace}>
              <img src={assets.infospace} alt="" />
            </div>
            <div className={style.bhcInfo}>Passengers</div>
            <div className={style.bhcInfoSpace}>
              <img src={assets.infospace} alt="" />
            </div>
            <div className={style.bhcInfo}>Type flight</div>
          </div>
        </div>
        <div className={style.basisHeadRight}>
          <div className={style.bhrButton}>
            <p>Change Search</p>
          </div>
        </div>
      </div>
      <div className={style.customBasis}>
        <div className={style.basisLeft}>
          <div className={style.blFilter}>
            <div className={style.blfHead}>
              <p className={style.blfhFilter}>Filter</p>
              <button className={style.blfhReset}>Reset</button>
            </div>
            <div className={style.blfBody}>
              <div className={style.blfBodyValue}>
                <div className="accordion" id="transit">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-transit">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-transit"
                        aria-expanded="true"
                        aria-controls="data-transit"
                      >
                        <strong>Transit</strong>
                      </button>
                    </h2>
                    <div
                      id="data-transit"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-transit"
                      data-bs-parent="#transit"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Direct</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Transit</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Transit 2+</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="facilities">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-facilities">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-facilities"
                        aria-expanded="true"
                        aria-controls="data-facilities"
                      >
                        <strong>Facilities</strong>
                      </button>
                    </h2>
                    <div
                      id="data-facilities"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-facilities"
                      data-bs-parent="#facilities"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Luggage</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>In-Flight Meal</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>Wi-Fi</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="departure-time">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-departure-time">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-departure-time"
                        aria-expanded="true"
                        aria-controls="data-departure-time"
                      >
                        <strong>Departure Time</strong>
                      </button>
                    </h2>
                    <div
                      id="data-departure-time"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-departure-time"
                      data-bs-parent="#departure-time"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>00:00 - 06:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>06:00 - 12:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>12:00 - 18:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>18:00 - 24:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion" id="time-arrived">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="header-time-arrived">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#data-time-arrived"
                        aria-expanded="true"
                        aria-controls="data-time-arrived"
                      >
                        <strong>Time Arrived</strong>
                      </button>
                    </h2>
                    <div
                      id="data-time-arrived"
                      className="accordion-collapse collapse show"
                      aria-labelledby="header-time-arrived"
                      data-bs-parent="#time-arrived"
                    >
                      <div className="accordion-body">
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>00:00 - 06:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>06:00 - 12:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>12:00 - 18:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                          <span>18:00 - 24:00</span>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="filter-checkbox"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.basisRight}>
          <div className={style.brFlight}>
            <div className={style.brSelect}>
              <div className={style.brfHead}>
                <p className={style.brfhSelect}>Select Ticket</p>
                <div className="d-flex flex-row gap-2">
                  <button className={style.brfhSortby}>Sort by</button>
                  <img src={assets.sortby} alt="" className={style.whSortby} />
                </div>
              </div>
              <div className={style.brfBody}>
                <div className={style.brfBodyValue}>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex flex-row gap-4">
                      <div>
                        <img src={assets.brftlogo} alt="" />
                      </div>
                      <div className="mt-3">
                        <p className={style.flightName}>Garuda Indonesia</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row gap-4">
                        <div className="d-flex flex-column">
                          <p className={style.codeFlight}>IDN</p>
                          <p className={style.departureTime}>12.00</p>
                        </div>
                        <div>
                          <img
                            src={assets.airlinespace}
                            alt=""
                            className="mt-2"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <p className={style.codeFlight}>JPN</p>
                          <p className={style.arrivalTime}>14.00</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className={style.spaceTime}>3 hours 11 minutes</p>
                      </div>
                      <div className="d-flex flex-row gap-3 mt-2">
                        <div>
                          <img src={assets.luggage} alt="" />
                        </div>
                        <div>
                          <img src={assets.lunch} alt="" />
                        </div>
                        <div>
                          <img src={assets.wifi} alt="" />
                        </div>
                      </div>
                      <div className="d-flex flex-row gap-0 mt-2">
                        <div>
                          <p className={style.flightPrice}>$ 214</p>
                        </div>
                        <div>
                          <p className={style.flightPax}>/pax</p>
                        </div>
                      </div>
                      <div>
                        <button className={style.btnFlight}>Select</button>
                      </div>
                    </div>
                    <div className="d-flex flex-row gap-2">
                      <div>
                        <p className={style.viewDetail}>View Details</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
