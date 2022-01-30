import axios from "axios";

const API_URL = 'https://parked-iot-project.herokuapp.com/';

class Api {
    constructor() {
        
    }
    post(data, url) {
        return axios.post(API_URL + url, data)
    }
}

export default new Api();