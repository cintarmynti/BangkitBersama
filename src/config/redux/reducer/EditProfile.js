const initialState = {
    alertText: '',
    setAlert: false,
    newPhoto: null,
    newDocument: null,
    form: {
        photo: '',
        name: '',
        username: '',
        profession: '',
        address: '',
        document: ''
    }
}

const EditProfile = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_EDIT_PROFILE':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.input]: action.value
                }
            }
        case 'SET_PHOTO_EDIT_PROFILE':
            return {
                ...state,
                newPhoto: action.value
            }
        case 'SET_DOCUMENT_EDIT_PROFILE':
            return {
                ...state,
                newDocument: action.value
            }
        case 'SET_ALERT_TEXT_EDIT_PROFILE':
            return {
                ...state,
                alertText: action.value
            }
        case 'SET_ALERT_EDIT_PROFILE':
            return {
                ...state,
                setAlert: action.value
            }
    }

    return state
}

export default EditProfile