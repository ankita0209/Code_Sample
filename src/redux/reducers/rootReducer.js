// import external modules
import { combineReducers } from "redux";
// import internal(own) modules
import calenderReducer from "./calenderReducer";
import emailReducer from "./email/";
// import chatReducer from "./chatReducer";
import dashboardReducer from "./dashboard/dashboard";
import chatReducer from "./chat/";
import contactsReducer from "./contacts/";
import todoReducer from "./todo/";
import userReducer from "./user/userStatus";
import incidentReducer from "./incident";
import customizer from "./customizer/";
import incidentsReducer from "./incidents/incidents";

import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
   calender: calenderReducer,
   emailApp: emailReducer,
   contactApp: contactsReducer,
   todoApp: todoReducer,
   toastr: toastrReducer, // <- Mounted at toastr.
   chatApp: chatReducer,
   userStatus: userReducer,
   dashboard : dashboardReducer,
   incident : incidentReducer,
   customizer: customizer,
   incidentsReducer: incidentsReducer
});

export default rootReducer;
