const initialState = {
    user: {},
    token: ''
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                token: `Bearer ${action.token}`
            }
    }


    return state
}

export default Auth