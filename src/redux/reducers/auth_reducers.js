const initState = {
    isLogged: false,
    username: null,
};

const capitalizeFirstLetter = string=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
     };

const auth_reducers = (state = initState, action) =>{
    switch (action.type) {
        case "SUCCESS_LOGIN":
            return state = {...state, isLogged: true};
        case "SUCCESS_LOGOUT":
            return state = {...state, isLogged: false, username: null};
        case "SUCCESS_SET_USERNAME":
            return state = {...state, username: capitalizeFirstLetter(action.payload)};
        default:
            return state
    }
};

export default auth_reducers;
