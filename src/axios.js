import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-ae776/us-central1/api'  //THE APU (cloud function) URL
});

export default instance; 