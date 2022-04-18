import axios from "axios";
import data from "../../data/data.json";

const baseData = "../../data/data.json";

export const getAllShoes = () => {
  return (dispatch) => {
    axios
      .get(baseData)
      .then((response) => {
        dispatch(setShoesData(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setShoesData = (payload) => {
  return {
    type: "SET_LIST_SHOES_DATA",
    payload,
  };
};
