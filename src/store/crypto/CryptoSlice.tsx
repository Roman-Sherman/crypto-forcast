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
            state.cryptoDataSet = action.payload;
        },
    },
});

export const { setCryptoDataSet } = CryptoSlice.actions;

export const fetchCryptoDataSet = () => async (dispatch: AppDispatch) => {
    try {
        const responseSummary = await axios.get('https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=day&filter=listed&base=USD');
        const responseSearch = await axios.get('https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=day');

        const result = responseSearch.data?.data.map((item: any) => {
            return { 
                ...item,
                ...responseSummary.data?.data.find((element: any) => item.base === element.base)
            }
        })

        dispatch(setCryptoDataSet(result));
    } catch (err) {
        throw new Error();
    }
};

export default CryptoSlice.reducer;
