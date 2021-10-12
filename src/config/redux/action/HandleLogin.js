import Axios from 'axios'
import { BASE_API_URL } from '../../../config'
import { Async } from '../../../utils'
import { StackActions } from '@react-navigation/native'

const HandleLogin = (dataForm, navigation) => async dispatch => {
    await Axios.post(BASE_API_URL + 'login', dataForm)
        .then(res => {
            const meta = res.data.meta;
            const data = res.data.data;
            if (meta.code == 200) {
                Async.set('user', data);
                Async.set('token', 'Bearer ' + data.token);
                Async.set('isLogged', 'true');
                dispatch({ type: 'RESET_LOGIN_FORM' })

                navigation.dispatch(StackActions.replace('MainPages'))
            } else {
                dispatch({ type: 'SET_ALERT_TEXT_LOGIN', value: 'Email/Password salah' })
                dispatch({ type: 'SET_ALERT_LOGIN', value: true })
            }
        })
        .catch(err => console.log('LOGIN ', err))
}

export default HandleLogin