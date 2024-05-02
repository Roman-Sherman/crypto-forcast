import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const initialState = {
    cryptoDataSet: [],
};

export const CryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCryptoDataSet: (state, action) => {
            state.cryptoDataSet = action.payload.data;
        },
    },
});

export const { setCryptoDataSet } = CryptoSlice.actions;

export const fetchCryptoDataSet = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get('https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=day&filter=listed&base=USD');

        dispatch(setCryptoDataSet(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default CryptoSlice.reducer;
