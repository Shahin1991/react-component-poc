import {combineReducers} from 'redux'
import userReducer from './user/userReducer';

 const rootReducer = combineReducers(
     {userReducerData:userReducer})

 export default rootReducer