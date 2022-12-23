// import React from "react";
import React, {useEffect, useState } from "react";
import axios from "axios";
import styles from './profile.module.css';
import phot from '../../assets/poto.png';
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

  const [data,setData] = useState([])
  const photo=data.photo
  const [dataProfile, setDataPofile] = useState([])
  const id=data.id

  useEffect(()=>{
    const getProfile = async () =>{
        try {         
            // const token = localStorage.getItem('token')
            const result = await axios({
              method: 'GET',
              url: `http://localhost:3006/auth/user`,
              headers: {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
              }
            })
            setData(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    getProfile()
    }, [])
 
  const handleUpload = (e) => {
    const handle = e.target.files[0]
    setDataPofile(handle);
}

  const handleUploadData = async(e) => {
      e.preventDefault()
      const token = localStorage.getItem('token')
      console.log(token);
      const formData = new FormData()
        formData.append("fullname", dataProfile.fullname);
        formData.append("email", dataProfile.email);
        formData.append("phone", dataProfile.phone);
        formData.append("city", dataProfile.city);
        formData.append("address", dataProfile.address);
        formData.append("photo", dataProfile);
        formData.append("postcode", dataProfile.postcode);
      try {
          const updateData = await axios({
              method: 'PUT',
              url: `http://localhost:3006/auth/${id}`,
              data: formData,
              headers: {
                  "Content-Type": "multipart/form-data",
                  "authorization": `Bearer ${token}`
              }
          })
          alert('Update Photo Sucess')
          console.log(updateData);
      } catch (error) {
          console.log(error);
      }
  }

  const handleChange = (e) => {
    const newdata = { ...dataProfile };
    newdata[e.target.fullname] = e.target.value;
    setDataPofile(newdata);
  };


  return (
      <div className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.side1}>
          {photo ?
            <img src={data.photo} alt="" className={styles.img} /> :
             <img src={phot} alt="" className={styles.img} />
            }
            <div className={styles.file}>
              <label htmlFor="files" className="btn">Select Photo</label>
              <input type="file" id="files" name="files" onChange={handleUpload}/>
            </div>
            <div className={styles.name}>
            <h3>{data.fullnamee}</h3>
              <img src={location} alt="" />
              <span>{data.city}, {data.address}</span>
            </div>
            <div className={styles.card}>
              <span style={{color:"black"}}> Card </span>
              <span> + Add </span>
            </div>
            <img src={card} alt="" className={styles.imgcard} />
            <div className={styles.span}>
              <img src={user} alt=""/>
              <span className={styles.prof}> Profile </span>
                <img src={rowblue} alt="" className={styles.panah} style={{marginLeft:"10px"}} />
            </div>
            <div className={styles.span}>
                <img src={star} alt=""/>
                <span> My Review </span>
                <img src={rowgrey} alt="" className={styles.panah} style={{marginLeft:"34px"}} />
            </div>
            <div className={styles.span}>
                <img src={setting} alt="" />
                <span> Setting </span>
                <img src={rowgrey} alt="" className={styles.panah} style={{marginLeft:"58px"}} />
            </div>
            <div className={styles.span}>
                <img src={log} alt="" />
                <span className={styles.log}> Logout </span>
                <img src={rowred} alt="" className={styles.panah} style={{marginLeft:"10px"}} />
            </div>
          </div>
          <div className={styles.side2}>
            {/* <div> */}
                <h5> Profile </h5>
                <h3> Profile </h3>
            {/* </div> */}
            <div className={styles.input}>
            <div className={styles.contact}>
                <h6> Contact </h6>
                <p> Email </p>
                <input type="email" name="email" placeholder={data.email } onChange={(e) => handleChange(e)} value={dataProfile.email}/>
                <p> Phone Number </p>
                <input type="number" name="phone" placeholder={data.phone} onChange={(e) => handleChange(e)} value={dataProfile.phone} />
            </div>
            <div className={styles.biodata}>
                <h6> Biodata </h6>
                <p> Fullname </p>
                <input type="text" name="fullname" placeholder={data.fullname} onChange={(e) => handleChange(e)} value={dataProfile.fullname} />
                <p> City </p>
                <input type="text" name="city" placeholder={data.city} onChange={(e) => handleChange(e)} value={dataProfile.city}  />
                <p> Address </p>
                <input type="text" name="address" placeholder={data.address} onChange={(e) => handleChange(e)} value={dataProfile.address} />
                <p> Post Code </p>
                <input type="text" name="postcode" placeholder={data.postcode} onChange={(e) => handleChange(e)} value={dataProfile.postCode} />
            </div>
            </div>
            <button type="submit" onClick={(e) => handleUploadData(e)}> Save </button>
          </div>
        </div>
      </div>  
  )
}

export default Profile