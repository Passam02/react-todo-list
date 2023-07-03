import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

function ColorMode({setDarkMode}) {
    const theme = useTheme();
    return (
      <Box
        sx={{
          display: 'flex',
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          p: 3,
          marginLeft: 'auto'
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(!JSON.parse(localStorage.getItem('DarkMode')))} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    );
  }
export default ColorMode