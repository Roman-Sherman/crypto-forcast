import { useState } from 'react';
import {
  IconButton,
  Box,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  Button,
  Stack
} from '@mui/material';
import * as dropdownData from './data';

import { IconChecks, IconClock, IconMessageDots } from '@tabler/icons';
import React from 'react';

const Message = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          color: anchorEl2 ? 'primary.main' : '',
        }}
        onClick={handleClick2}
      >
        <Badge variant="dot" color="primary">
          <IconMessageDots size="21" stroke="1.5" />
        </Badge>
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '385px',
          },
        }}
      >
        <Stack direction="row" p={2} justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h5">Messages</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              You have 3 unread messages
            </Typography>
          </Box>
          <IconChecks width={20} height={20} />
        </Stack>
        <Divider />
        {dropdownData.messages.map((message) => (
          <Box key={message.title}>
            <MenuItem sx={{ py: 2 }}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  src={message.avatar}
                  alt={message.avatar}
                  sx={{
                    width: 45,
                    height: 45,
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    noWrap
                    sx={{
                      width: '240px',
                    }}
                  >
                    {message.title}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    fontWeight={400}
                    sx={{
                      width: '240px',
                    }}
                    noWrap
                  >
                    {message.subtitle}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    display="flex"
                    alignItems="center"
                    gap={1}
                  >
                    <IconClock width={16} height={16} />
                    {message.time}
                  </Typography>
                </Box>
              </Stack>
            </MenuItem>
            <Divider
              style={{
                marginTop: 0,
                marginBottom: 0,
              }}
            />
          </Box>
        ))}
        <Box p={2} pb={1}>
          <Button variant="contained" color="primary" fullWidth>
            See all messages
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Message;
