import axios from "axios";

const instance = axios.create ({
    baseURL: "https://tiktok-mern-backe.herokuapp.com/"
});

export default instance;