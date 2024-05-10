import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IconFileUpload } from "@tabler/icons";
import { utils, read } from "xlsx";
import PaginationTable from "src/components/table/PaginationTable";

const formatterCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 3
});

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: '150px',
        render: (record: any) => convertNumber2Date(record?.date)
    },
    {
        field: 'type',
        headerName: 'Type',
        width: '100px',
    },
    {
        field: 'currency_pair',
        headerName: 'Currency Pair',
    },
    {
        field: 'amount',
        headerName: 'Amount',
        align: 'right',
    },
    {
        field: 'price',
        headerName: 'Price(USD)',
        align: 'right',
        render: (record: any) => formatterCurrency.format(record?.total)
    },
    {
        field: 'total',
        headerName: 'Total(USD)',
        align: 'right',
        render: (record: any) => formatterCurrency.format(record?.total)
    },
];

const convertNumber2Date = (excelDate: number) => {
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // milliseconds in a day

    // Excel's epoch starts from 1900-01-01, but there's a known issue with Excel's date system.
    // Excel incorrectly considers 1900 to be a leap year, so we adjust the epoch to be 1 day earlier.
    const excelEpoch = new Date(Date.UTC(1899, 11, 30)); // 1899-12-30

    // Calculate the milliseconds offset
    const millisecondsOffset = excelDate * millisecondsPerDay;

    // Create a new Date object by adding the offset to the epoch
    const date = new Date(excelEpoch.getTime() + millisecondsOffset);

    return date.toLocaleDateString();
}

const PortfolioPage = () => {
    const [excelData, setExcelData] = useState<any>([]);

    const handleFileChange = (e: any) => {
        const selectedFile = e.target.files[0];
    
        if (selectedFile) {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                const sheetData = new Uint8Array(e.target.result);
                const selectedSheet = read(sheetData);
                const sheet = selectedSheet.SheetNames;

                if (sheet.length) {
                    const data = utils.sheet_to_json(selectedSheet.Sheets[sheet[0]]);

                    console.log(data)
                    setExcelData(data);
                }
            }

            reader.readAsArrayBuffer(selectedFile);
        }
    }

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3" sx={{ marginBottom: 2 }}>Crypto Portfolio</Typography>

                <Button
                    variant="contained"
                    component="label"
                    startIcon={<IconFileUpload />}
                    sx={{ background: '#24B47E', color: '#FFFFFF' }}
                >
                    File Upload
                    <input
                        type="file"
                        accept=".xls,.xlsx"
                        onChange={handleFileChange}
                        hidden
                    />
                </Button>
            </Box>

            <PaginationTable columns={columns} dataSource={excelData} />
        </Box>
    )
}

export default PortfolioPage;