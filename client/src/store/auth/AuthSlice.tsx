import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const initialState = {
    isAuthenticated: false,
    token: null
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action) => {
            console.log('signin: ', action.payload)
            if (action.payload.access_token) {
                console.log('success: ', action.payload)
                state.isAuthenticated = true;
                state.token = action.payload.access_token;

                localStorage.setItem('token', action.payload.access_token);
            }
        },
        signup: (state, action) => {
            console.log("signup: ", action.payload)
        },
        signout: (state) => {
            state.isAuthenticated = false;
            state.token = null;

            localStorage.removeItem('token');
        }
    },
});

export const { signin, signup, signout } = AuthSlice.actions;

export const fetchSignIn = (payload: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/login', payload);

        dispatch(signin(response.data));
    } catch (err) {
        throw new Error();
    }
};

export const fetchSignUp = (payload: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/register', payload);

        dispatch(signup(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default AuthSlice.reducer;
