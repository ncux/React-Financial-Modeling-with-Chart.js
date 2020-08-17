import { SET_LOADING, SET_DATA, ERROR_FETCHING_DATA } from "../types";

const InitialState = {
    loading: false,
    data: {},
    error: ''
};

export default (state=InitialState, { type, payload }) => {

    switch (type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case SET_DATA:
            return {
                ...state,
                loading: false,
                data: payload,
                error: null
            };

        case ERROR_FETCHING_DATA:
            return {
                ...state,
                loading: false,
                data: {},
                error: `There was a problem: ${payload}`
            };

        default:
            return state;
    }
};
