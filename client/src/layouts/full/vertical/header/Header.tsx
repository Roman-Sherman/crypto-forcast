import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack } from '@mui/material';

import { useSelector, useDispatch } from 'src/store/Store';
import { setDarkMode, toggleSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import { IconMenu2, IconMoon, IconSun } from '@tabler/icons';
import Profile from './Profile';
import Search from './Search';
import { AppState } from 'src/store/Store';

const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));

  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: 'transparent',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" color={customizer.activeMode === 'dark' ? '#808080' : '#181818'} />
        </IconButton>

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/* ------------------------------------------- */}
          {/* Search Dropdown */}
          {/* ------------------------------------------- */}
          <Search />

          {/* ------------------------------------------- */}
          {/* Theme Button */}
          {/* ------------------------------------------- */}
          <IconButton onClick={() => dispatch(setDarkMode(customizer.activeMode === 'dark' ? 'light' : 'dark'))}>
            {
              customizer.activeMode === 'dark'
                ? <IconMoon size="20" color='#808080' />
                : <IconSun size="20" color='#181818' />
            }
          </IconButton>

          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
