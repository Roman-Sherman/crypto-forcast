import { useEffect, useState } from "react";
import { Box, Typography, MenuItem } from "@mui/material";
import { useParams } from "react-router";
import Chart, { Props } from 'react-apexcharts';
import { AppState, useDispatch, useSelector } from "src/store/Store";
import { fetchCryptoPrediction, fetchCryptoHistories } from "src/store/crypto/CryptoSlice";
import CustomSelect from "src/components/forms/theme-elements/CustomSelect";

const PredictionGraphPage = () => {
    const dispatch = useDispatch();
    const { symbol } = useParams();
    const customizer = useSelector((state: AppState) => state.customizer);
    const { cryptoPrediction } = useSelector((state: AppState) => state.cryptoReducer);

    const [period, setPeriod] = useState('1h');

    const optionsareachart: Props = {
        chart: {
            id: 'area-chart',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            foreColor: '#adb0bb',
            zoom: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: '3',
            curve: 'smooth',
        },
        colors: ['#24B47E'],
        fill: {
            gradient: {
                shade: customizer.activeMode === 'dark' ? 'dark' : 'light',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [0, 90, 100],
            },
        },
        xaxis: {
            type: 'datetime',
            categories: cryptoPrediction?.map(item => item[0]),
        },
        yaxis: {
            opposite: false,
            labels: {
                show: true,
            },
        },
        legend: {
            show: true,
            position: 'bottom',
            width: '50px',
        },
        grid: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
        },
    };
    const seriesareachart = [
        {
            name: 'Crypto Prediction',
            data: cryptoPrediction?.map((item: any) => item[1].toFixed(2)),
        },
    ];

    useEffect(() => {
        const payload = {
            coin: symbol,
            period: period
        }

        dispatch(fetchCryptoHistories(payload));
        dispatch(fetchCryptoPrediction(payload));
    }, [dispatch, symbol, period]);

    return (
        <Box>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Prediction</Typography>

            <CustomSelect
                labelId="age-select"
                fullWidth
                value={period}
                onChange={(e: any) => setPeriod(e.target.value)}
            >
                <MenuItem value="1h">1h</MenuItem>
                <MenuItem value="4h">4h</MenuItem>
                <MenuItem value="12h">12h</MenuItem>
                <MenuItem value="day">day</MenuItem>
                <MenuItem value="week">week</MenuItem>
            </CustomSelect>

            <Box>
                <Chart options={optionsareachart} series={seriesareachart} type="area" height="700px" />
            </Box>
        </Box>
    )
}

export default PredictionGraphPage;