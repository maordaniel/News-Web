const initState = {
    activePage: "home",
};

const main_reducers = (state = initState, action)=>{
    switch (action.type) {
        case "SET_ACTIVE_PAGE":
            return state = {...state, activePage: action.payload};
        default:
            return state
    }
};

export default main_reducers;
