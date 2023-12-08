import { USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "../action/userAction";

const INITIAL_STATE = {
   account: {
    access_token: '',
    email: '',
    image: '',
    refresh_token: '',
    role: '',
    username: '',
   },
   isLogInSuccess: false
};
const userReduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state, account: action?.payload?.DT,
                isLogInSuccess: true
            };
        case USER_LOGOUT_SUCCESS:
            return{
                ...state, account: INITIAL_STATE.account,
                isLogInSuccess: false
            };
        default: return state;
    }
};

export default userReduser;