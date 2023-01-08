import axios from 'axios';
import { ApiClient } from "../api/ApiClient";

const instance = axios.create({
    // baseURL: ''
});

export default new ApiClient("https://localhost:5001", instance)