import axios from "axios";

export const resultURL = "https://cors-anywhere.herokuapp.com/https://api.schoolworkspro.com/marks/my-marks/";

const result = (notifyDetails) => {
  return axios.get(`${resultURL}`, {
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
    },
  });
};

const auth = {
  result,
};

export default auth;
