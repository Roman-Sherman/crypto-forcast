import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { IconFileUpload } from "@tabler/icons";
import { utils, read } from "xlsx";

const PortfolioPage = () => {
    const [excelData, setExcelData] = useState<any>();

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

        </Box>
    )
}

export default PortfolioPage;