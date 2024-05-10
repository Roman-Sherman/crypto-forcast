import { Box, Typography, Button } from "@mui/material";
import { IconFileUpload } from "@tabler/icons";

const PortfolioPage = () => {
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
                        hidden 
                    />
                </Button>
            </Box>

        </Box>
    )
}

export default PortfolioPage;