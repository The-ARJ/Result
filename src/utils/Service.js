import axios from "axios";

export const resultURL = "/marks/my-marks";

const result = (notifyDetails) => {
  return axios.get(`${resultURL}`, {
    withCredentials: true,
    headers: {
      Authorization: `bearer ${window.localStorage.getItem("token")}`,
      "Content-Type":"application/x-www-form-urlencoded"
    },
  });
};

const auth = {
  result,
};

export default auth;
