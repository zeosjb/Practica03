import axios from "axios";

const baseURL = "http://192.168.0.2:5000/api/profile";

const userApi = axios.create({baseURL});

export default userApi