import Axios from 'axios'
import { BASE_API_URL } from '../../../config'
import { Async } from '../../../utils'

const HandleHelpInput = (data, token, navigation) => async dispatch => {
    let formData = new FormData();
    formData.append('file', data.photo);

    await Axios
        .post(BASE_API_URL + 'iofile/upload-photo-help', formData, {
            headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(async res => {
            data.photo = res.data.data.file
        })
        .catch(err => {
            console.log('UPLOAD PHOTO HELP PROFILE', err)
        });


    await Axios.post(BASE_API_URL + 'help/store', data, {
        headers: {
            Authorization: token
        },
    })
        .then(res => {
            console.log('SUCCESS STORE')
            const meta = res.data.meta;
            if (meta.code == 200) {
                dispatch({ type: 'RESET_HELP_INPUT_FORM' })
                dispatch({ type: 'RESET_HELP_INPUT_STEP', value: 2 })
            }
        })
        .catch(err => console.log('HELP STORE ', err))
}

export default HandleHelpInput