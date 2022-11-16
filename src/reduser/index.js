import { combineReducers } from "redux";
import Conmmet from "./Conmmet";
import authReduser from "./auth"
export default combineReducers({
    Comments: Conmmet,
    auth:authReduser,
})