const initialState = {
    alertText: '',
    setAlert: false,
    form: {
        name: '',
        username: '',
        email: '',
        password: '',
        c_password: '',
        address: ''
    }

}

const Register = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REGISTER_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.input]: action.value
                }
            }
        case 'SET_ALERT_TEXT_REGISTER':
            return {
                ...state,
                alertText: action.value
            }
        case 'SET_ALERT_REGISTER':
            return {
                ...state,
                setAlert: action.value
            }
        case 'RESET_REGISTER_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    c_password: '',
                    address: ''
                }
            }
    }
    return state
}

export default Register;