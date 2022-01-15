import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e842b/us-central1/api'  // THE API (cloud function) URL
    // baseURL: 'https://us-central1-clone-e842b.cloudfunctions.net/api'
});

export default instance;