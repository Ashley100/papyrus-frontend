import { combineReducers } from "redux";

// Reducers
import { reducer as formReducer } from 'redux-form'
import login from "./auth/login";

const rootReducer = combineReducers({
    login: login,

    form: formReducer
});

export default rootReducer;