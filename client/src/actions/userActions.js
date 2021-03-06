import axios from 'axios';

import { CART_CLEAR_EVERYTHING } from '../Constants/cartConstants';

import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAILURE,
    USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_FAILURE,
    USER_UPDATE_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_RESET
}
from '../Constants/userConstants';

export const login = (email, password) => async(dispatch) => {
    /* this action creator logs in a user by connecting to the api
       and getting the user and the token */
    try {

        dispatch( { type: USER_LOGIN_REQUEST } )

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        let { data }  = await axios.post('/api/users/login', { email: email, password: password}, config);
        
        dispatch( { type: USER_LOGIN_SUCCESS, payload: data } )

        // Remember the user, in local storage

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        // when the authentication fails
        dispatch({
            type: USER_LOGIN_FAILURE,
            payload: error.response && error.response.data.message
                     ? error.response.data.message
                     : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    /* this action creator logs a user out
       it removes the token from local storage */
    
    localStorage.removeItem('userInfo');

    dispatch( { type: USER_LOGOUT} )
    
    /* also remove the user details as well */
    
    dispatch( { type: USER_DETAILS_RESET } )
    dispatch( { type: USER_UPDATE_PROFILE_RESET } )

    dispatch( { type: CART_CLEAR_EVERYTHING })
}

export const resetUserDetails = () => async(dispatch) =>{
    /* this action creator resets the user details in the redux system */

    dispatch( { type: USER_DETAILS_RESET } )
}

export const register = (name, email, password) => async(dispatch) => {
    /* this action creator is responsible for registerin a user
        in this application, after having registered, it logs in the user
        by firing the login action as well */
    try {
        dispatch( { type: USER_REGISTER_REQUEST } );

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        let { data } = await axios.post('/api/users', 
                        { name: name, 
                          email: email, 
                          password: password }, config);
        
        dispatch( { type: USER_REGISTER_SUCCESS, payload: data } );

        /* Now, this is important
           Also dispatch, i.e. FIRE LOGIN SUCCESS ACTION WITH THIS USER AS WELL
           TO INDICATE THAT HE HAS AUTOMATICALLY LOGGED IN */
        
        dispatch( { type: USER_LOGIN_SUCCESS, payload: data } )

        // again add the logged in user to the local storage
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        
        dispatch( { type: USER_REGISTER_FAILURE,
                    payload: error.response && error.response.data.message
                             ? error.response.data.message
                             : error.message
        } );
    }
}

export const getUserDetails = (id) => async(dispatch, getState) => {
    /* this action creator is responsible for getting the 
       user details */
    try {
        /* api route is actually /api/users/profile */

        // get the token to make the api communication
        const { userLogin: { userInfo } } = getState();

        dispatch( { type: USER_DETAILS_REQUEST} );

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        let { data } = await axios.get(`/api/users/${id}`, config);

        dispatch( { type: USER_DETAILS_SUCCESS, payload: data } )

    } catch (error) {
        dispatch( { type: USER_DETAILS_FAILURE,
                    payload: error.response && error.response.data.message
                             ? error.response.data.message  
                             : error.message        
        } )
    }
}

export const userUpdateProfile = (user) => async(dispatch, getState) => {
    /* this action creator is responsible for updating the user */

    try {
        
        dispatch( { type: USER_UPDATE_PROFILE_REQUEST } )

        /* Since this update opreation requires token in the backend 
           get the token */
        
        // get the token to make the api communication
        const { userLogin: { userInfo } } = getState();

        let config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        let { data } = await axios.put('/api/users/profile', user, config);

        dispatch( { type: USER_UPDATE_PROFILE_SUCCESS, payload: data} ) 

        /* Now also dispatch the action GET_USER_DETAILS again to update the system */

        let { data: updatedUserDetails } = await axios.get(`/api/users/profile`, config);

        dispatch( { type: USER_DETAILS_SUCCESS, payload: updatedUserDetails } )
        

    } catch (error) {
        
        dispatch( { type: USER_UPDATE_PROFILE_FAILURE,
                    payload: error.response && error.response.data.message 
                             ? error.response.data.message
                             : error.message} )
    }
}