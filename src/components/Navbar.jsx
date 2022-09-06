import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { SearchBar } from './index';

import logo from '../assets/logo.png';

const Navbar = () => (
  <Stack
    direction={{ xs: 'column', md: 'row' }}
    alignItems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='logo' height={55} />
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar;
