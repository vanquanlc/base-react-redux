import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReduser from './userReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReduser,
});

export default rootReducer;