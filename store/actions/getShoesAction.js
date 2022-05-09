import { useState } from "react";

export const getAllShoes = () => {
  const [filter, setFilter] = useState("");

  return (dispatch) => {
    dataShoe.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(filter.toString().toLowerCase())
      );
    });
  };
};

export const setShoesData = (payload) => {
  return {
    type: "SET_LIST_SHOES_DATA",
    payload,
  };
};
