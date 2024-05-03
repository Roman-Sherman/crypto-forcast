import { Box, Card } from "@mui/material"
import { AppState, useSelector } from 'src/store/Store';
import AuthSignIn from "./authForms/AuthSignIn";

import "./Authentication.css";

const SignInPage = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  
  return (
    <Box className="auth-wrapper">
        <Card className="auth-card" sx={{ background: customizer.activeMode === 'dark' ? '#212121' : '#FFFFFF', padding: '30px' }}>
            <AuthSignIn />
        </Card>
    </Box>
    )
}

export default SignInPage;