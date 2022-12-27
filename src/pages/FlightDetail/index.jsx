import React, { useEffect, useState } from "react";
import style from "./flightdetail.module.css";
import assets from "../../assets";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FlightDetail = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [fullname, setFullname] = useState("");
  const [nationality, setNationality] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [u_id, setU_id] = useState("");
  const [uuid, setUuid] = useState("");

  var token = localStorage.getItem("token");
  var user_id = localStorage.getItem("user_id");
  var user_fullname = localStorage.getItem("user_fullname");
  var user_email = localStorage.getItem("user_email");
  var user_phone = localStorage.getItem("user_phone");
  console.log(user_id, user_fullname, user_phone);

  const getDetailData = async (url) => {
    console.log("ini token", token);
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data.data);
      setStock(res.data.data[0].stock);
      setPrice(res.data.data[0].price);
      setU_id(user_id);
      setUuid(user_id);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let url = `http://localhost:3006/stock-ticket/getstockticket/${id}`;
    getDetailData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(stock, price, u_id, uuid);

  const afterstock = stock - 1;
  console.log(afterstock);

  const handlerPassenger = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("datail_user", title);
      data.append("custommer_name", fullname);
      data.append("nationality", nationality);
      data.append("user_id", u_id);
      data.append("uuid", uuid);
      data.append("total_price", price);
      await axios.post(`http://localhost:3006/ticket/post-ticket`, data, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.setItem("stock", afterstock);
      localStorage.setItem("price", price);
      localStorage.setItem("id_stock", id);
      navigate("/payment/:id");
      console.log("Success create to payment");
    } catch (err) {
      console.log(err);
    }
  };

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
                  <input type="text" name="fullname" value={user_fullname} />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={user_email} />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input type="text" name="phone" value={user_phone} />
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
              <form
                onSubmit={handlerPassenger}
                id="passengers-detail"
                className={style.blFormCenter}
              >
                <div>
                  <img src={assets.brfcfield} alt="" />
                </div>
                <div>
                  <label htmlFor="title">Title</label>
                  <select
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="fullname">Fullname</label>
                  <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="nationality">Nationality</label>
                  <select
                    name="nationality"
                    id="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  >
                    <option value="ID">ID</option>
                    <option value="UK">UK</option>
                    <option value="IND">IND</option>
                    <option value="SG">SG</option>
                    <option value="Other">Other</option>
                  </select>
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
          <div>
            <button
              type="submit"
              onClick={handlerPassenger}
              form="passengers-detail"
              className={style.btnProceed}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
        <div className={style.basisRight}>
          <div className={style.basisRHead}>
            <p className={style.brhLeft}>Flight Detail</p>
            <p className={style.brhRight}>View Detail</p>
          </div>
          <div className={style.brContainerTop}>
            {data.map((item) => (
              <div className={style.brBasisFormTop}>
                <div className={style.brFormTop}>
                  <div>
                    <div>
                      <img src={item.photo} alt="" className={style.image} />
                    </div>
                    <div>
                      <div>{item.airlines}</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>{item.departure}</p>
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
                      <p>{item.arrived}</p>
                    </div>
                  </div>
                  <div className={style.brFormTopSpace}>
                    <p>Date</p>
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
                        <div>$ {item.price}</div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
