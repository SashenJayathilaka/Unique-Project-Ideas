import axios from "axios";

const instance = axios.create({
  baseURL: "https://messenger-mern-clone22.herokuapp.com",
});

export default instance;
