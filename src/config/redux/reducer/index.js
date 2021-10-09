import { combineReducers } from "redux";
import Register from './Register'
import Login from './Login'
import Auth from './Auth'
import EditProfile from './EditProfile'

const reducer = combineReducers({
    Register,
    Login,
    Auth,
    EditProfile
})

export default reducer;