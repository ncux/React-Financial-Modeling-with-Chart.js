import axios from "axios";
import { config } from "../../config/axios";

export const fetchBitcoinDataAction = (time, number) => {

    return async dispatch => {
        try {
            console.log(time, number);

        } catch (e) {
            console.log(e);
        }
    };


};
