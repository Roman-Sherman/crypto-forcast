import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from 'src/store/Store';

const initialState = {
    cryptoDataSet: [],
    cryptoPrediction: []
};

export const CryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCryptoDataSet: (state, action) => {
            state.cryptoDataSet = action.payload;
        },
        setCryptoPrediction: (state, action) => {
            state.cryptoPrediction = action.payload;
        }
    },
});

export const { setCryptoDataSet, setCryptoPrediction } = CryptoSlice.actions;

export const fetchCryptoDataSet = () => async (dispatch: AppDispatch) => {
    try {
        const responseSummary = await axios.get('https://coinbase.com/api/v2/assets/summary?include_prices=true&resolution=week&filter=listed&base=USD');
        const responseSearch = await axios.get('https://coinbase.com/api/v2/assets/search?base=USD&filter=listed&include_prices=true&resolution=week');
        const coingecko = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&api_key=${process.env.REACT_APP_API_KEY}`);

        const result = responseSearch.data?.data.map((item: any) => {
            return { 
                ...item,
                prices: responseSummary.data?.data.find((element: any) => item.base === element.base)?.prices?.reverse(),
                coin_id: coingecko.data.find((element: any) => item.base.toLowerCase() === element.symbol)?.id,
            }
        })

        dispatch(setCryptoDataSet(result));
    } catch (err) {
        throw new Error();
    }
};

export const fetchCryptoPrediction = ({ coin, days }: any) => async (dispatch: AppDispatch) => {
    try {
        const payload = {
            coin_id: coin,
            days: days
        }

        console.log(payload)

        const response = await axios.post('http://localhost:5000/api/prediction', payload);


        console.log("response: ", response.data)

        dispatch(setCryptoPrediction(response.data));
    } catch (err) {
        throw new Error();
    }
};

export default CryptoSlice.reducer;
