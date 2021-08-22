import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react"; 
import isEmpty from "lodash/isEmpty";

import { fetchWordData } from "../redux/actions/words";
import { setUserId } from "../redux/actions/auth"
import { getWordTypeDataSelector } from "../redux/selectors/localStorage";
import { SOCIAL_TYPE_FIRST } from "../const";

export const useFetchWordData = (
    wordType, 
    word, 
    options = { 
        socialType: SOCIAL_TYPE_FIRST, 
        handleSuccess: null 
    }
) => {
    const [state, setState] = useState({
        loading: true,
        errors: "",
    });

    const dispatch = useDispatch();

    const { user } = useAuth0();
    const userId = "";

    console.log("use auth", user);

    const wordData = useSelector((state) => getWordTypeDataSelector(state, wordType, word));
    const hasWordData = () => wordData || !isEmpty(wordData);

    console.log("should fetch?", wordData, isEmpty(wordData), hasWordData());
    useEffect(() => {
        setState(({ loading: true, error: "" }));

        // if word type doesn't exist in localStorage then fetch it
        if (userId && !hasWordData()) {
            console.log("yes fetch!", wordData);

            dispatch(fetchWordData(wordType, word, options))
            .then((res) => {
                console.log("res", res);
                // setState({ loading: false, error: "" });
                // options.handleSuccess && options.handleSuccess(res);
            })
            .catch((error) => {
                console.log(`ERROR FETCHING WORD TYPE DATA: ${error}`);
                setState(({ loading: false, errors: `${error}` }));
            });
        }
    }, [dispatch, userId, word, wordType]);

    return {
        ...state,
        wordData
    };
};