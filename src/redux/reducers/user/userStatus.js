const initialState = {
    user : '',
    userData : {}
}

const userStatus = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_STATUS':
            return state;
        case 'LOGIN':
            state.user = action.user;
            state.userData = {...state.userData, ...action.userData};
            return state;
        case 'LOGOUT':
            state.user = '';
            state.userData = {};
            return state;
        default:
            return state;
    }
}

export default userStatus;