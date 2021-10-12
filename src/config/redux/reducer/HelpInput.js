const initialState = {
    step: 1,
    alertTex: '',
    setAlert: false,
    form: {
        help_category_id: null,
        photo: '',
        name: '',
        description: '',
        quota: null,
        end_date: null
    }
}


const HelpInput = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HELP_INPUT_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.input]: action.value
                }
            }
        case 'SET_ALERT_TEXT_HELP_INPUT':
            return {
                ...state,
                alertText: action.value
            }
        case 'SET_ALERT_HELP_INPUT':
            return {
                ...state,
                setAlert: action.value
            }

        case 'RESET_HELP_INPUT_STEP':
            return {
                ...state,
                step: action.value
            }

        case 'RESET_HELP_INPUT_FORM':
            return {
                ...state,
                form: {
                    ...state.form,
                    help_category_id: null,
                    user_id: null,
                    photo: '',
                    name: '',
                    description: '',
                    quota: null,
                    end_date: null
                }
            }
    }
    return state
}

export default HelpInput;