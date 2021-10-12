import Axios from 'axios'
import { BASE_API_URL } from '../..'

const SetMyHelps = (token) => async dispatch => {
    await Axios.get(BASE_API_URL + 'help/get-by-inisiator', {
        headers: {
            Authorization: token
        },
    })
        .then(res => {
            const meta = res.data.meta;
            const data = res.data.data;
            if (meta.code == 200) {
                dispatch({ type: 'SET_MY_HELPS', value: data })
            }
        })
        .catch(err => console.log('GET MY HELPS ', err))
}

export default SetMyHelps