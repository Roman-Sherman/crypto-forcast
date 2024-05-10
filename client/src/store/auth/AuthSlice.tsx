import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const initialState = {
    isAuthenticated: false,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin: (state, action) => {
            console.log(action.payload)
        }
    },
});

export const { signin } = AuthSlice.actions;

export const fetchSignIn = (payload: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/signin', payload);

        dispatch(signin(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default AuthSlice.reducer;
