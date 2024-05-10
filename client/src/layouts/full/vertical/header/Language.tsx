import React from 'react';
import { Avatar, IconButton, Menu, MenuItem, Typography, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { setLanguage } from 'src/store/customizer/CustomizerSlice';
import FlagEn from 'src/assets/images/flag/icon-flag-en.svg';
import FlagFr from 'src/assets/images/flag/icon-flag-fr.svg';
import FlagCn from 'src/assets/images/flag/icon-flag-cn.svg';
import FlagSa from 'src/assets/images/flag/icon-flag-sa.svg';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { AppState } from 'src/store/Store';

const Languages = [
  {
    flagname: 'English (UK)',
    icon: FlagEn,
    value: 'en',
  },
  {
    flagname: '中国人 (Chinese)',
    icon: FlagCn,
    value: 'ch',
  },
  {
    flagname: 'français (French)',
    icon: FlagFr,
    value: 'fr',
  },

  {
    flagname: 'عربي (Arabic)',
    icon: FlagSa,
    value: 'ar',
  },
];

const Language = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const customizer = useSelector((state: AppState) => state.customizer);
  const currentLang =
    Languages.find((_lang) => _lang.value === customizer.isLanguage) || Languages[1];
  const { i18n } = useTranslation();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    i18n.changeLanguage(customizer.isLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar src={currentLang.icon} alt={currentLang.value} sx={{ width: 20, height: 20 }} />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        {Languages.map((option, index) => (
          <MenuItem
            key={index}
            sx={{ py: 2, px: 3 }}
            onClick={() => dispatch(setLanguage(option.value))}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar src={option.icon} alt={option.icon} sx={{ width: 20, height: 20 }} />
              <Typography> {option.flagname}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Language;
