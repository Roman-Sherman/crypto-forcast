import { Box, Typography } from "@mui/material";
import { DashboardTable } from "../dashboard/DashboardTable";

const PredictionPage = () => {
    return (
        <Box>
            <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Prediction</Typography>

            <Box>
                <DashboardTable />
            </Box>
        </Box>
    )
}

export default PredictionPage;