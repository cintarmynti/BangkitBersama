import Axios from 'axios'
import { BASE_API_URL } from '../../../config'
import { Async } from '../../../utils'

const HandleEditProfile = (data, token, navigation) => async dispatch => {
    if (data.newPhoto) {
        let formData = new FormData();
        formData.append('file', data.newPhoto);

        await Axios
            .post(BASE_API_URL + 'iofile/upload-photo-profile', formData, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                data.form.photo = res.data.data.file
            })
            .catch(err => {
                console.log('UPLOAD PHOTO EDIT PROFILE', err)
            });
    } else {
        delete data.form.photo
    }

    if (data.newDocument) {
        let formData = new FormData();
        formData.append('file', data.newDocument);

        await Axios
            .post(BASE_API_URL + 'iofile/upload-document', formData, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                data.form.document = res.data.data.file
            })
            .catch(err => {
                console.log('UPLOAD DOCUMENT EDIT PROFILE', err)
            });
    } else {
        delete data.form.document
    }

    await Axios.put(BASE_API_URL + 'update', data.form, {
        headers: {
            Authorization: token
        },
    })
        .then(res => {
            const meta = res.data.meta;
            const data = res.data.data;
            if (meta.code == 200) {
                Async.set('user', data)
                dispatch({ type: 'SET_STATUS', value: data.user_status_id })
                navigation.navigate('MainPages')
            }
        })
        .catch(err => console.log('UPDATE PROFILE ', err))
}

export default HandleEditProfile