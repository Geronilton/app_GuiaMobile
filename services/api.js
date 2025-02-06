import axios from "axios";

const api = new axios.create({
    // baseURL: "http://127.0.0.1:3001"
    baseURL: "http://192.168.1.70:3001"
    // baseURL: "http://192.168.137.121:3001"

})

export {api};