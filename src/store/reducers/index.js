import { combineReducers } from "redux";
import bitcoinReducer from "./bitcoinReducer";

export default combineReducers({
    bitcoin: bitcoinReducer,
});
