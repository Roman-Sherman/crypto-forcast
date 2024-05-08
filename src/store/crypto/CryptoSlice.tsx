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
            period: period === 'week' ? 'week' : 'day'
        }

        const response = await axios.post('http://localhost:5000/api/prediction', payload);

        let limit = 0;

        switch(period) {
            case '1h':
                limit = 12;
                break;
            case '4h':
                limit = 48;
                break;
            case '12h':
                limit = 144;
                break;
            default:
                limit = response.data.length;
                break;
        }

        dispatch(setCryptoPrediction(response.data.slice(0, limit)));
    } catch (err) {
        throw new Error();
    }
};

export const fetchCryptoHistories = ({ coin, period }: any) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`https://api.coinbase.com/v2/prices/${coin}-USD/historic?sort=rank&period=${period}`);

        dispatch(setCryptoHistories(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default CryptoSlice.reducer;
