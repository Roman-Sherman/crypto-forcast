import { Box, Avatar, Typography } from "@mui/material";
import { AppState, useSelector } from "src/store/Store";

import "./Dashboard.css";

const formatterCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 3
});

const DashboardListItem = ({ dataSource }: any) => {
    return (
        <Box className="dashboard-list-item">
            <div className="dashboard-list-item-crypto">
                <Avatar src={dataSource?.image_url} sx={{ width: 35, height: 35, marginRight: "10px" }}></Avatar>
                <div>
                    <Typography variant="h6">{dataSource?.name}</Typography>
                    <Typography sx={{ color: "#808080", marginTop: "3px", fontSize: 12 }}>{dataSource?.base}</Typography>
                </div>
            </div>
            <div>
                <Typography align="right" variant="h6">{formatterCurrency.format(dataSource?.latest)}</Typography>
                <Typography align="right" sx={{ fontSize: 12, marginTop: "3px", color: dataSource?.percent_change >= 0 ? '#1CBF67' : '#FF5F52', fontWeight: 1000 }}>
                    {
                        dataSource?.percent_change
                            ? (dataSource?.percent_change * 100).toFixed(2)
                            : 0
                    }%
                </Typography>
            </div>
        </Box>
    )
}

const DashboardListItems = ({ title, dataSource }: any) => {
    return (
        <Box sx={{ marginBottom: 6 }}>
            <Typography variant="h5" sx={{ fontSize: 21 }}>{ title }</Typography>

            {
                dataSource.map((item: any, index: number) => (
                    <DashboardListItem key={index} dataSource={item} />
                ))
            }
        </Box>
    )
}

const DashboardList = () => {
    const { cryptoDataSet } = useSelector((state: AppState) => state.cryptoReducer);

    return (
        <Box sx={{ margin: "0 20px" }}>
            <DashboardListItems 
                title="Trending Cryptos" 
                dataSource={
                    cryptoDataSet?.slice(0, 6)
                }
            />
            <DashboardListItems 
                title="Top Gainers" 
                dataSource={
                    [...cryptoDataSet]?.sort((a: any, b: any) => b?.percent_change - a?.percent_change).slice(0, 3)
                }
            />
            <DashboardListItems 
                title="Top Losers" 
                dataSource={
                    [...cryptoDataSet]?.sort((a: any, b: any) => a?.percent_change - b?.percent_change).slice(0, 3)
                }
            />
        </Box>
    )
}

export { DashboardList };