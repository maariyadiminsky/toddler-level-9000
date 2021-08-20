import axios from "axios";

import { DICTIONARY_API_BASE_URL } from "./const";

export default axios.create({
    baseURL: DICTIONARY_API_BASE_URL
});