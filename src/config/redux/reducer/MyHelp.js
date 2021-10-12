const initialState = {
    helps: []
}


const MyHelp = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MY_HELPS':
            return {
                ...state,
                helps: action.value
            }
    }
    return state
}

export default MyHelp;