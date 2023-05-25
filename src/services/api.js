import axios from "axios";

export const api = axios.create({
    // baseURL:"https://foodexplorer-efd7.onrender.com"
    baseURL:'http://localhost:3000'
})