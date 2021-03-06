import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

/* Import Reducers */
import { userDetailsReducer, userLoginReducer, 
         userRegisterReducer, userUpdateProfileReducer } from '../reducers/userReducers';

let reducers = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
});

let userInfoFromLocalStorage = localStorage.getItem('userInfo')
                               ? JSON.parse(localStorage.getItem('userInfo'))
                               : null;

/* initial state of the application is stored here */
let initialState = {
    userLogin: { userInfo: userInfoFromLocalStorage }
};

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;