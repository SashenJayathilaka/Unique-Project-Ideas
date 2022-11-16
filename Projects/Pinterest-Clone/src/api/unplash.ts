import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID GpNpY3FuMd9cf0JIpNdkpB9PASeAd0Nn3Ch7vLrqjAA",
  },
});
