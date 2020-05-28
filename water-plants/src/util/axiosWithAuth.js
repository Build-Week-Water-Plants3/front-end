import axios from "axios";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  console.log(`Token is ${token}`)

  return axios.create({
    baseURL: "https://water-my-plants3.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};


