import { combineReducers } from "redux";
import Register from './Register'
import Login from './Login'

const reducer = combineReducers({
    Register,
    Login
})

export default reducer;