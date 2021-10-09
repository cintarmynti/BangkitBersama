const initialState = {
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
        case 'SET_PROFILE':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.input]: action.value
                }
            }
    }

    return state
}

export default EditProfile