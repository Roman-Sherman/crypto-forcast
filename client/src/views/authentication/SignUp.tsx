import { Box, Card } from "@mui/material"
import { AppState, useSelector } from 'src/store/Store';
import AuthSignUp from "./authForms/AuthSignUp";

import "./Authentication.css";

const SignUpPage = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  
  return (
    <Box className="auth-wrapper">
        <Card className="auth-card" sx={{ background: customizer.activeMode === 'dark' ? '#212121' : '#FFFFFF', padding: '30px' }}>
            <AuthSignUp />
        </Card>
    </Box>
    )
}

export default SignUpPage;