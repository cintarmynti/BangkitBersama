const initialState = {
    helps: []
}


const HelpForHome = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HELPS_FOR_HOME':
            return {
                ...state,
                helps: action.value
            }
    }
    return state
}

export default HelpForHome;