import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazonbackend24.herokuapp.com",
});

export default instance;
