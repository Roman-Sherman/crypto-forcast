import { FC, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { useSelector, useDispatch } from 'src/store/Store';
import { ThemeSettings } from './theme/Theme';
import RTL from './layouts/full/shared/customizer/RTL';
import ScrollToTop from './components/shared/ScrollToTop';
import Router from './routes/Router';
import { AppState } from './store/Store'
import setAuthToken from './utils/setAuthToken';
import { signout } from './store/auth/AuthSlice';


const App: FC = () => {
  const dispatch = useDispatch();
  const routing = useRoutes(Router);
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    window.addEventListener('storage', () => {
      if (!localStorage.token) dispatch(signout());
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={customizer.activeDir}>
        <CssBaseline />
        <ScrollToTop>{routing}</ScrollToTop>
      </RTL>
    </ThemeProvider>
  );
};

export default App;
