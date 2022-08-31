import { history } from "../index";
import {
  OK,
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
  TOKEN,
  LOGOUT,
} from "../Constants";
import { User } from "../types/user.type";
import { httpClient } from "../utils/httpclient";
import { LoginResult } from "../types/authen.type";
import { Buffer } from "buffer";
import axios from "axios";

export const setLoginFetchingToState = () => ({
    type: LOGIN_FETCHING,
  });
  
  export const setLoginSuccessToState = (payload: LoginResult) => ({
    type: LOGIN_SUCCESS,
    payload,
  });
  
  export const setLoginFailedToState = () => ({
    type: LOGIN_FAILED,
  });
  
  export const setLogoutToState = () => ({
    type: LOGOUT,
  });

  // encode, decode string V1
  const encodedString = new Buffer('P5274;Ake_0822').toString('base64');
  const decodeString = new Buffer('UDUyNzQ7QWtlXzA4MjI=','base64').toString('utf8');

  // encode, decode string V2
  const encoded = Buffer.from('P5274;Ake_0822', 'utf8').toString('base64');
  const plain = Buffer.from('UDUyNzQ7QWtlXzA4MjI=', 'base64').toString('utf8');

  export const login = (user: User, navigate: any) => {
    return async (dispatch: any) => { 
      try {

        // begin connecting...
        dispatch(setLoginFetchingToState());

        // connect
        const result = await httpClient.post<LoginResult>(server.LOGIN_URL, user);
        if (result.data.result === OK) {
          setTimeout(() => {
            console.log("result");
            console.log(result);

            // set TOKEN
            localStorage.setItem(TOKEN, result.data.token!);
            dispatch(setLoginSuccessToState(result.data));
            //alert("Login Successfully");
            navigate("/dashboard");
          }, 1000);
        } else {
          dispatch(setLoginFailedToState());
        }
      } catch (error) {
        // error
        dispatch(setLoginFailedToState());
      }
    };
  };

  export const restoreLogin = () => {
    return (dispatch: any) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        dispatch(
          setLoginSuccessToState({
            result: OK,
            token,
            message: "Login successfully",
          })
        );
      }
    };
  };

  export const logout = (navigate: any) => {
    return (dispatch: any) => {
      localStorage.removeItem(TOKEN);
      dispatch(setLogoutToState());
      alert("Logout successfully");
      navigate("/login");
    };
  };
  


