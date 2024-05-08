import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const initialState = {
    cryptoDataSet: [],
    cryptoHistories: [],
    cryptoPrediction: [],
};

export const CryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCryptoDataSet: (state, action) => {
            state.cryptoDataSet = action.payload;
        },
        setCryptoHistories: (state, action) => {
            state.cryptoHistories = action.payload;
        },
        setCryptoPrediction: (state, action) => {
            console.log(action.payload)
            state.cryptoPrediction = action.payload;
        },
    },
});

export const { setCryptoDataSet, setCryptoHistories, setCryptoPrediction } = CryptoSlice.actions;

export const fetchCryptoDataSet = () => async (dispatch: AppDispatch) => {
    try {
        const responseSummary = await axios.get('https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=week&filter=listed&base=USD');
        const responseSearch = await axios.get('https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=week');

        const result = responseSearch.data?.data.map((item: any) => {
            return {
                ...item,
                prices: responseSummary.data?.data.find((element: any) => item.base === element.base)?.prices?.reverse(),
            }
        })

        dispatch(setCryptoDataSet(result));
    } catch (err) {
        throw new Error();
    }
};

export const fetchCryptoPrediction = ({ coin, period }: any) => async (dispatch: AppDispatch) => {
    try {
        const payload = {
            coin: coin,
            period: period
        }

        const response = await axios.post('http://localhost:5000/api/prediction', payload);

        dispatch(setCryptoPrediction(response.data));
    } catch (err) {
        throw new Error();
    }
};

export const fetchCryptoHistories = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=7&api_key=${process.env.REACT_APP_API_KEY}`);

        dispatch(setCryptoHistories(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default CryptoSlice.reducer;
