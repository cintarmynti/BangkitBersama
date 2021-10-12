import Axios from 'axios'
import { BASE_API_URL } from '../..'

const SetHelpDetail = (help_id, token) => async dispatch => {
    await Axios.get(BASE_API_URL + 'help/get-detail/' + help_id, {
        headers: {
            Authorization: token
        },
    })
        .then(res => {
            console.log(res)
            const meta = res.data.meta;
            const data = res.data.data;
            if (meta.code == 200) {
                dispatch({ type: 'SET_HELP_DETAIL', value: data })
            }
        })
        .catch(err => console.log('GET HELP DETAIL ', err))
}

export default SetHelpDetail