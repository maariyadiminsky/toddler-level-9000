import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react"; 
import { useDispatch, useSelector } from "react-redux";

import { setUserId } from "../redux/actions/auth"
import { getUserIdSelector } from "../redux/selectors/auth";

export const useAuth = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    const dispatch = useDispatch();

    const userId = useSelector(getUserIdSelector);

    useEffect(() => {
        if (user && user.sub) {
          dispatch(setUserId(user.sub));
        }
      }, [user, dispatch])

      return {
          isAuthenticated,
          user,
          userId,
          loginWithRedirect,
          logout
      };
};