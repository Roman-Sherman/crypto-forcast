import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Card, Box, Avatar } from '@mui/material';
import { AppState, useSelector } from 'src/store/Store';
import { IconTrendingUp, IconTrendingDown } from '@tabler/icons';
import Chart, { Props } from 'react-apexcharts';
import './DashboardCard.css';

const DashboardCard = ({
    dataSource
}: any) => {
    const customizer = useSelector((state: AppState) => state.customizer);

    const theme = useTheme();
    const borderColor = theme.palette.grey[100];

    const seriesareachart = [
        {
            name: 'crypto price graph',
            data: dataSource?.prices?.slice(0, 10),
        }
    ];

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
        colors: dataSource?.percent_change >= 0 ? ['#1CBF67'] : ['#FF5F52'],
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
        legend: {
            show: true,
            position: 'bottom',
            width: '50px',
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    };

    const CryptoCard = styled(Card)(() => ({
        width: '280px',
        height: '180px',
        background: customizer.activeMode === 'dark' ? '#212121' : '#FFFFFF'
    }));

    return (
        <CryptoCard
            sx={{ margin: 'auto', padding: '10px 20px', border: !customizer.isCardShadow ? `1px solid ${borderColor}` : 'none', borderRadius: 3 }}
            elevation={customizer.isCardShadow ? 9 : 0}
            variant={!customizer.isCardShadow ? 'outlined' : undefined}
        >
            <Box className='dashboard-card-crypto'>
                <div className='crypto-info'>
                    <Avatar sx={{ width: 35, height: 35, marginRight: 2 }} src={dataSource?.image_url} alt='' />
                    <div>
                        <p className='crypto-name'>{dataSource?.name}</p>
                        <p className='crypto-base'>{dataSource?.base}</p>
                    </div>
                </div>
                {
                    dataSource?.percent_change >= 0
                        ? <IconTrendingUp color='#1CBF67' />
                        : <IconTrendingDown color='#FF5F52' />
                }
            </Box>
            <Box className='dashboard-card-graph'>
                <div style={{ width: '100px' }}>
                    <p className='crypto-price'>${dataSource?.latest}</p>
                    <p className='crypto-raise' style={{ color: dataSource?.percent_change >= 0 ? '#1CBF67' : '#FF5F52' }}>
                        {
                            dataSource?.percent_change
                                ? (dataSource?.percent_change * 100).toFixed(2)
                                : 0
                        }%
                    </p>
                </div>
                <div className='crypto-graph'>
                    <Chart options={optionsareachart} series={seriesareachart} type="area" width={160} height={120} />
                </div>
            </Box>
        </CryptoCard>
    );
};

export default DashboardCard;
