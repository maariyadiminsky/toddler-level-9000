import axios from "axios";

import { UNSPLASH_API_BASE_URL } from "./const";

export default axios.create({
    baseURL: UNSPLASH_API_BASE_URL,
    headers: {
        Authorization: process.env.REACT_APP_UNSPLASH_CLIENT_ID,
        "Accept-Version": "v1"
    }
});