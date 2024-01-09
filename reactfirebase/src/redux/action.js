import axios from "axios";

export const fetchCar = () => {
  return (dispatch) => {
    axios
      .get("https://my-json-server.typicode.com/zahidi14/bootcamp/car")
      .then((resp) => {
        const response = resp.data;
        dispatch({ type: "FETCH_CAR", payload: response });
      })
      .catch((err) => {
        console.log({ err: err });
      });
  };
};
