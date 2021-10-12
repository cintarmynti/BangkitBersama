const initialState = {
    status: 1
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return {
                ...state,
                status: action.value
            }
    }

    return state
}

export default Auth