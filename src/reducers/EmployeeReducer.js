const initialState = {
    isLoginSuccess: false
};
const employeeReducer = (state = initialState, action) => {
    switch (action.type){
        case "LOGIN": {
            return{
                ...state,
                isLoginSuccess: true
            }
        }
        default:
            return state;
    }        
}

export default employeeReducer;