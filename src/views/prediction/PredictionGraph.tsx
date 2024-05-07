import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { AppState, useDispatch, useSelector } from "src/store/Store";
import { fetchCryptoPrediction } from "src/store/crypto/CryptoSlice";

const PredictionGraphPage = () => {
    const dispatch = useDispatch();
    const { symbol } = useParams();
    const { cryptoPrediction } = useSelector((state: AppState) => state.cryptoReducer);

    useEffect(() => {
        const payload = {
            coin: symbol,
            days: 1
        }

        dispatch(fetchCryptoPrediction(payload));

        console.log("prediction: ", cryptoPrediction)
    }, [dispatch, symbol]);

    return (
        <Box>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Prediction</Typography>

            <Box>
                
            </Box>
        </Box>
    )
}

export default PredictionGraphPage;