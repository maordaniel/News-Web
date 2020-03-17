export const username = (user) => dispatch =>{
    dispatch({
        type: "SUCCESS_SET_USERNAME",
        payload: user
    })
};

export const login = () => dispatch => {
    dispatch({
        type: "SUCCESS_LOGIN",
    })
};


export const logout = () => dispatch => {
    dispatch({
        type: "SUCCESS_LOGOUT",
    })
};

export const authLoginDetails = (loginDetails) => dispatch => {
    dispatch({
        type: "SUCCESS_AUTH_LOGIN_DETAILS_USER",
        payload: loginDetails
    })
};
