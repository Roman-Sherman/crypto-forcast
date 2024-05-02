import { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useDispatch } from "src/store/Store";
import { fetchCryptoDataSet } from "src/store/crypto/CryptoSlice";

import { DashboardList } from "./DashboardList";
import { DashboardCards } from "./DashboardCards";
import { DashboardTable } from "./DashboardTable";

const DashboardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCryptoDataSet());
    }, [dispatch]);

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h3" sx={{ marginBottom: 2 }}>Dashboard</Typography>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box sx={{ width: "100%" }}>
                    <DashboardCards />
                </Box>
                <Box sx={{ marginTop: 5 }}>
                    <DashboardTable />
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <DashboardList />
            </Grid>
        </Grid>
    )
}

export default DashboardPage;