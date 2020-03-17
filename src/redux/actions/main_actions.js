export const activePage = (val) => dispatch =>{
    dispatch({
        type: "SET_ACTIVE_PAGE",
        payload: val
    })
};
