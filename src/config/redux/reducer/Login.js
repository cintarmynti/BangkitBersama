const initialState = {
    alertTex: '',
    setAlert: false,
    form: {
        email: '',
        password: ''
    }
}


const Login = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.input]: action.value
                }
            }
        case 'SET_ALERT_TEXT_LOGIN':
            return {
                ...state,
                alertText: action.value
            }
        case 'SET_ALERT_LOGIN':
            return {
                ...state,
                setAlert: action.value
            }
    }
    return state
}

export default Login;