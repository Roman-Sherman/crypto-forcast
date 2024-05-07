import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import Chart, { Props } from 'react-apexcharts';
import { AppState, useDispatch, useSelector } from "src/store/Store";
import { fetchCryptoPrediction, fetchCryptoHistories } from "src/store/crypto/CryptoSlice";

const PredictionGraphPage = () => {
    const dispatch = useDispatch();
    const { symbol } = useParams();
    const { cryptoHistories } = useSelector((state: AppState) => state.cryptoReducer);

    const optionscandlestickchart: Props = {
        chart: {
            height: 350,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
        plotOptions: {
            candlestick: {
                wick: {
                    useFillColor: true
                }
            },
        },
        tooltip: {
            theme: 'dark',
        },
        grid: {
            show: false,
        },
    };
    const seriecandlestickchart: any = [
        {
            data: cryptoHistories
        },
    ];

    useEffect(() => {
        const payload = {
            coin: symbol,
            days: 1
        }

        dispatch(fetchCryptoHistories());
        dispatch(fetchCryptoPrediction(payload));
    }, [dispatch, symbol]);

    return (
        <Box>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Prediction</Typography>

            <Box>
                <Chart
                    options={optionscandlestickchart}
                    series={seriecandlestickchart}
                    type="candlestick"
                    height="500px"
                    width={'95%'}
                />
            </Box>
        </Box>
    )
}

export default PredictionGraphPage;