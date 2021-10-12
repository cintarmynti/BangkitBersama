const SetEditProfile = (data) => dispatch => {
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'photo', value: data.photo })
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'name', value: data.name })
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'username', value: data.username })
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'profession', value: data.profession })
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'address', value: data.address })
    dispatch({ type: 'SET_EDIT_PROFILE', input: 'document', value: data.document })
}

export default SetEditProfile