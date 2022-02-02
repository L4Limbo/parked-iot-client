import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

class Api {
    constructor() {
        
    }
    post(data, url) {
        return axios.post(API_URL + url, data)
    }
    upload(data, url) {
        return axios.post(API_URL + url, data)
    }
}

export default new Api();