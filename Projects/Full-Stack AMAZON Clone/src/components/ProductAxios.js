import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazonclone22.herokuapp.com/",
});

export default instance;
