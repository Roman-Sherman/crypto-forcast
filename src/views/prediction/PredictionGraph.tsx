import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { AppState, useSelector } from "src/store/Store";

const PredictionGraphPage = () => {
    const { symbol } = useParams();
    const { cryptoDataSet } = useSelector((state: AppState) => state.cryptoReducer);

    console.log(symbol, cryptoDataSet)

    return (
        <Box>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Prediction</Typography>

            <Box>
                
            </Box>
        </Box>
    )
}

export default PredictionGraphPage;