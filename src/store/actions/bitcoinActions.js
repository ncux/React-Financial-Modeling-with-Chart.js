import axios from "axios";
import { config } from "../../config/axios";
import {ERROR_FETCHING_DATA, SET_DATA, SET_LOADING} from "../types";

const { API_URL, httpHeaders } = config;

export const fetchBitcoinDataAction = (time, number) => {

    return async dispatch => {
        try {
            console.log(time, number);
            dispatch({ type: SET_LOADING });
            const { data } = await axios.get(API_URL);
            console.log(data);
            return dispatch({ type: SET_DATA, payload: data });
        } catch (e) {
            console.log(e);
            return dispatch({ type: ERROR_FETCHING_DATA, payload: e.message });
        }
    };


};
