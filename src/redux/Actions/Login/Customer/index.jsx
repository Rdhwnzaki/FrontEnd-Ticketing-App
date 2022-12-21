import axios from "axios";
import Swal from "sweetalert2";

export const loginCustomer = (data, navigate) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "CUSTOMER_LOGIN_PENDING" });
    const res = await axios.post(`http://localhost:3006/auth/login`, data);
    const customer = res.data.data;
    console.log(customer, "data customer");
    const token = customer.token;
    console.log(token, "token customer");
    localStorage.setItem("token", token);
    dispatch({ type: "CUSTOMER_LOGIN_SUCCESS", payload: customer });
    Swal.fire("Success", "Login success", "success");
    navigate("/home");
  } catch (err) {
    console.log(err);
    Swal.fire("Warning", "Login failed", "error");
  }
};
