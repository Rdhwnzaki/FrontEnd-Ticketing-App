import axios from "axios";

export const getSearchFlight = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_FLIGHT_PENDING" });
    const res = await axios.get(
      `https://gentle-tights-jay.cyclic.app/ticket/getstockticket`
    );
    const flight = res.data.data;
    console.log(flight, "data flight");
    dispatch({ type: "GET_FLIGHT_SUCCESS", payload: flight });
  } catch (err) {
    console.log(err);
  }
};
