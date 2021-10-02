import Axios from 'axios'
import { BASE_API_URL } from '../../../config'
import { StackActions } from '@react-navigation/native'

const HandleLogin = (data, navigation) => async dispatch => {
    await Axios.post(BASE_API_URL + 'login', data)
        .then(res => {
            const meta = res.data.meta;
            if (meta.code == 200) {
                navigation.dispatch(StackActions.replace('MainPages'))
            } else {
                dispatch({ type: 'SET_ALERT_TEXT_LOGIN', value: 'Email/Password salah' })
                dispatch({ type: 'SET_ALERT_LOGIN', value: true })
            }
        })
        .catch(err => console.log('LOGIN ', err))
}

export default HandleLogin