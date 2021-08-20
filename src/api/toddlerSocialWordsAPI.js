import axios from "axios";

import { TODDLER_SOCIAL_WORDS_API_BASE_URL } from "./const";

export default axios.create({
    baseURL: TODDLER_SOCIAL_WORDS_API_BASE_URL
});