export const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return { ...state, user: action.payload };
        case 'LOGIN_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
