// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import userStatus from "./userStatus";

const userReducer = combineReducers({
    userStatus
});

export default userReducer;