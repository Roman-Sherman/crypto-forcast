import { AppState, useSelector } from "src/store/Store";
import { Box, Avatar, Typography } from "@mui/material";
import Chart, { Props } from 'react-apexcharts';
import PaginationTable from "src/components/table/PaginationTable";

const formatterShort = new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 2
});

const formatterCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 3
});


const DashboardTable = () => {
    const customizer = useSelector((state: AppState) => state.customizer);
    const { cryptoDataSet } = useSelector((state: AppState) => state.cryptoReducer);

    const columns = [
        {
            field: '#',
            headerName: '#',
            width: '20px',
        },
        {
            field: 'name',
            headerName: 'Name',
            width: '100px',
            render: (record: any) => (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={record?.image_url} sx={{ width: 28, height: 28 }} />
                    <Typography sx={{ marginLeft: 1 }}>{record?.name}</Typography>
                    <Typography sx={{ marginLeft: 1, color: '#9B9B9B' }}>{record?.base}</Typography>
                </Box>
            )
        },
        {
            field: 'latest',
            headerName: 'Price',
            align: 'right',
            render: (record: any) => `${formatterCurrency.format(record?.latest)}`
        },
        {
            field: 'percent_change',
            headerName: '24h Change',
            align: 'right',
            render: (record: any) => (
                <Box sx={{ color: record?.percent_change >= 0 ? '#1CBF67' : '#FF5F52', fontWeight: 1000 }}>
                    {
                        record?.percent_change ? (record?.percent_change * 100).toFixed(2) : 0
                    }%
                </Box>
            )
        },
        {
            field: 'volume_24h',
            headerName: '24 Volume',
            align: 'right',
            render: (record: any) => `$ ${formatterShort.format(record?.volume_24h)}`
        },
        {
            field: 'market_cap',
            headerName: 'Market Cap',
            align: 'right',
            render: (record: any) => `$ ${formatterShort.format(record?.market_cap)}`
        },
        {
            field: 'prices',
            headerName: '7 Days Chart',
            width: '200px',
            render: (record: any) => {
                const optionsareachart: Props = {
                    chart: {
                        id: 'area-chart',
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
                    colors: record?.percent_change >= 0 ? ['#1CBF67'] : ['#FF5F52'],
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
                        show: false,
                        labels: {
                            show: false
                        },
                        axisBorder: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        }
                    },
                    yaxis: {
                        labels: {
                            show: false,
                        },
                    },
                    grid: {
                        show: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                };

                return <Chart className="dashboard-table-chart" options={optionsareachart} series={[{ data: record?.prices.slice(0, 50) }]} type="area" width={150} height={90} />
            }
        },
    ];

    return (
        <PaginationTable columns={columns} dataSource={cryptoDataSet} />
    )
}

export { DashboardTable };